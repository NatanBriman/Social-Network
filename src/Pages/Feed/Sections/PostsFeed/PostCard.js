import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import PopUpDialog from '../../../../Components/PopUpDialog';
import ReadMore from '../../../../Components/ReadMore';
import CommentOnPostButton from './Buttons/CommentOnPostButton';
import LikePostButton from './Buttons/LikePostButton';
import SharePostButton from './Buttons/SharePostButton';

const PostCard = ({ post }) => {
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
          <LikePostButton post={post} />

          <SharePostButton post={post} />

          <CommentOnPostButton post={post} />
        </Box>
      </CardActions>
    </Card>
  );
};

export default PostCard;
