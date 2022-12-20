import { Send } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import DropDownMenu, { createMenuItem } from '../../../../Components/DropDownMenu';
import useLocalStorage from '../../../../Hooks/useLocalStorage';
import { userSelector } from '../../../../Redux/Features/User/UserSlice';
import { LOCAL_STORAGE_KEYS } from '../../../../Utils/Constants';
import { filterById, findById, showToast } from '../../../../Utils/Helpers';

const SharePostButton = ({ post }) => {
  const [users, setUsers] = useLocalStorage(LOCAL_STORAGE_KEYS.users, []);
  const { id } = useSelector(userSelector);

  const [shareMenuAnchorElement, setShareMenuAnchorElement] = useState(null);
  const handleOpenShareMenu = ({ currentTarget }) => setShareMenuAnchorElement(currentTarget);
  const handleCloseShareMenu = () => setShareMenuAnchorElement(null);

  const availableUsersToShare = useMemo(() => users.filter((user) => user.id !== id), [users]);
  const usersShareMenuItems = useMemo(
    () =>
      availableUsersToShare.map(({ id, username, image }) =>
        createMenuItem(username, <Avatar className='shadow' alt={username} src={image} />, () =>
          sharePost(post, id)
        )
      ),
    [availableUsersToShare]
  );

  const sharePost = (post, userIdToShare) => {
    const userToShare = findById(availableUsersToShare, userIdToShare);
    const updatedSharedPosts = [...userToShare.sharedPosts, { sharedBy: id, post }];

    userToShare.sharedPosts = updatedSharedPosts;
    showToast(`The post has been shared to ${userToShare.username}!`);
    setUsers((users) => [...filterById(users, userIdToShare), userToShare]);
  };

  return (
    <>
      <IconButton color='primary' variant='outlined' onClick={handleOpenShareMenu}>
        <Send />
      </IconButton>

      <DropDownMenu
        items={usersShareMenuItems}
        anchorElement={shareMenuAnchorElement}
        open={Boolean(shareMenuAnchorElement)}
        handleCloseMenu={handleCloseShareMenu}
      />
    </>
  );
};

export default SharePostButton;
