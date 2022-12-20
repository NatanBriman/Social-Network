import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, userSelector } from '../../../../../Redux/Features/User/UserSlice';

const LikePostButton = ({ post }) => {
  const dispatch = useDispatch();
  const { likedPostsIds } = useSelector(userSelector);

  const toggleLikePost = (postId) => {
    const { addLikedPost, removeLikedPost } = userActions;
    const toggleLikeAction = isPostLiked ? removeLikedPost : addLikedPost;

    dispatch(toggleLikeAction(postId));
  };

  const isPostLiked = useMemo(() => likedPostsIds.includes(post.id), [post.id, likedPostsIds]);
  const likeButtonIcon = useMemo(
    () => (isPostLiked ? <Favorite /> : <FavoriteBorder />),
    [isPostLiked]
  );

  return (
    <IconButton color='error' onClick={() => toggleLikePost(post.id)}>
      {likeButtonIcon}
    </IconButton>
  );
};

export default LikePostButton;
