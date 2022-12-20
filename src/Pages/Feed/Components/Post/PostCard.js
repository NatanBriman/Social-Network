import { Comment, Favorite, FavoriteBorder, Send } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropDownMenu, { createMenuItem } from '../../../../Components/DropDownMenu';
import PopUpDialog from '../../../../Components/PopUpDialog';
import ReadMore from '../../../../Components/ReadMore';
import useLocalStorage from '../../../../Hooks/useLocalStorage';
import { userActions, userSelector } from '../../../../Redux/Features/User/UserSlice';
import { LOCAL_STORAGE_KEYS } from '../../../../Utils/Constants';
import { showToast } from '../../../../Utils/Helpers';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { likedPostsIds, id } = useSelector(userSelector);
  const [users, setUsers] = useLocalStorage(LOCAL_STORAGE_KEYS.users, []);
  const availableUsersToShare = useMemo(() => users.filter((user) => user.id !== id), [users]);
  const usersShareMenuItems = useMemo(
    () =>
      availableUsersToShare.map(({ id, username, image }) =>
        createMenuItem(
          username,
          <Avatar
            className='shadow'
            style={{ width: '2.5rem', height: '2.5rem' }}
            alt={username}
            src={image}
          />,
          () => sharePost(post, id)
        )
      ),
    [availableUsersToShare]
  );

  const [shareMenuAnchorElement, setShareMenuAnchorElement] = useState(null);
  const handleOpenShareMenu = ({ currentTarget }) => setShareMenuAnchorElement(currentTarget);
  const handleCloseShareMenu = () => setShareMenuAnchorElement(null);

  const toggleLikePost = (postId) => {
    const { addLikedPost, removeLikedPost } = userActions;
    const toggleLikeAction = isPostLiked ? removeLikedPost : addLikedPost;

    dispatch(toggleLikeAction(postId));
  };

  const sharePost = (post, userIdToShare) => {
    const userToShare = availableUsersToShare.find((user) => user.id === userIdToShare);
    const updatedSharedPosts = [...userToShare.sharedPosts, { sharedBy: id, post }];

    userToShare.sharedPosts = updatedSharedPosts;
    showToast(`The post has been shared to ${userToShare.username}!`);
    setUsers((users) => [...users.filter((user) => user.id !== userIdToShare), userToShare]);
  };

  const isPostLiked = useMemo(() => likedPostsIds.includes(post.id), [post.id, likedPostsIds]);
  const likeButtonIcon = useMemo(
    () => (isPostLiked ? <Favorite /> : <FavoriteBorder />),
    [isPostLiked]
  );

  return (
    <Card className='shadow rounded' style={{ zIndex: '1' }}>
      <CardHeader
        avatar={<Avatar className='shadow' src={post.author.image} alt={post.author.username} />}
        title={<Typography variant='h5'>{post.author.username}</Typography>}
      />

      <CardContent style={{ paddingTop: 0 }}>
        <Typography className='shadow rounded' p={1} variant='body2' color='text.secondary'>
          <ReadMore text={post.description} maxWidth={169} />
        </Typography>

        <PopUpDialog
          style={{ maxHeight: '80vh', maxWidth: '70vw' }}
          title='Post Image'
          dialogContent={
            <img
              style={{ maxHeight: '60vh', maxWidth: '70vw' }}
              className='shadow rounded'
              src={post.image}
              alt='Post Image'
            />
          }
        >
          <CardMedia
            className='clickable rounded'
            image={post.image}
            alt='Post Image'
            style={{ height: '10em', marginTop: '1em' }}
          />
        </PopUpDialog>
      </CardContent>

      <Divider />

      <CardActions>
        <Box className='max-width' display='flex' justifyContent='flex-end' gap={1}>
          <IconButton color='error' onClick={() => toggleLikePost(post.id)}>
            {likeButtonIcon}
          </IconButton>

          <IconButton color='primary' variant='outlined' onClick={handleOpenShareMenu}>
            <Send />
          </IconButton>

          <DropDownMenu
            items={usersShareMenuItems}
            anchorElement={shareMenuAnchorElement}
            open={Boolean(shareMenuAnchorElement)}
            handleCloseMenu={handleCloseShareMenu}
          />

          <IconButton color='success' variant='outlined'>
            <Comment />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default PostCard;
