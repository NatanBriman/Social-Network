import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import ReadMore from '../../../Components/ReadMore';

const PostCard = ({ post }) => {
  return (
    <Card className='post rounded'>
      <CardHeader
        avatar={<Avatar src={post.author().image()} alt={post.author().username()} />}
        title={<Typography variant='h5'>{post.author().username()}</Typography>}
      />

      <CardContent style={{ paddingTop: 0 }}>
        <Typography variant='body2' color='text.secondary'>
          <ReadMore text={post.description()} maxWidth={169} />
        </Typography>

        <Box mt={1}>
          <CardMedia
            className='shadow rounded'
            image={post.image()}
            alt='Post Image'
            component='img'
            style={{ height: '10em' }}
          />
        </Box>
      </CardContent>

      <CardActions>
        <Button>Share</Button>
        <Button>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
