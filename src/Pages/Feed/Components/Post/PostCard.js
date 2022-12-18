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
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PopUpDialog from '../../../../Components/PopUpDialog';
import ReadMore from '../../../../Components/ReadMore';
import { userActions, userSelector } from '../../../../Redux/Features/User/UserSlice';

const PostCard = ({ post }) => {
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
    <Card className='shadow rounded'>
      <CardHeader
        avatar={<Avatar className='shadow' src={post.author.image} alt={post.author.username} />}
        title={<Typography variant='h5'>{post.author.username}</Typography>}
      />

      <CardContent style={{ paddingTop: 0 }}>
        <Typography className='shadow rounded' p={1} variant='body2' color='text.secondary'>
          <ReadMore text={post.description} maxWidth={169} />
        </Typography>

        <PopUpDialog
          title='Post Image'
          dialogContent={
            <img
              style={{ maxHeight: '40em', maxWidth: '40em' }}
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

          <IconButton color='primary' variant='outlined'>
            <Send />
          </IconButton>

          <IconButton color='success' variant='outlined'>
            <Comment />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default PostCard;
