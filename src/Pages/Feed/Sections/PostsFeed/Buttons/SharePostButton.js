import { Send } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import DropDownMenu, { createMenuItem } from '../../../../../Components/DropDownMenu';
import useLocalStorage from '../../../../../Hooks/useLocalStorage';
import { userSelector } from '../../../../../Redux/Features/User/UserSlice';
import { LOCAL_STORAGE_KEYS } from '../../../../../Utils/Constants';
import { filterByNotId, findById, getExtendedArray, showToast } from '../../../../../Utils/Helpers';

const SharePostButton = ({ post }) => {
  const [users, setUsers] = useLocalStorage(LOCAL_STORAGE_KEYS.users, []);
  const { id, friends } = useSelector(userSelector);

  const [shareMenuAnchorElement, setShareMenuAnchorElement] = useState(null);
  const handleOpenShareMenu = ({ currentTarget }) => setShareMenuAnchorElement(currentTarget);
  const handleCloseShareMenu = () => setShareMenuAnchorElement(null);
  const isFriendsExists = friends.length > 0;

  const shareMenuItems = useMemo(
    () =>
      isFriendsExists
        ? friends.map(({ id, username, image }) =>
            createMenuItem(username, <Avatar className='shadow' alt={username} src={image} />, () =>
              sharePost(post, id)
            )
          )
        : [createMenuItem('Add friends in order to share the post', '', () => {})],
    [friends]
  );

  const sharePost = (post, userIdToShare) => {
    const userToShare = findById(users, userIdToShare);
    const updatedSharedPosts = getExtendedArray(userToShare.sharedPosts, { sharedBy: id, post });

    userToShare.sharedPosts = updatedSharedPosts;
    showToast(`The post has been shared to ${userToShare.username}!`);
    setUsers((users) => getExtendedArray(filterByNotId(users, userIdToShare), userToShare));
  };

  return (
    <>
      <IconButton color='primary' variant='outlined' onClick={handleOpenShareMenu}>
        <Send />
      </IconButton>

      <DropDownMenu
        items={shareMenuItems}
        anchorElement={shareMenuAnchorElement}
        open={Boolean(shareMenuAnchorElement)}
        handleCloseMenu={handleCloseShareMenu}
      />
    </>
  );
};

export default SharePostButton;
