import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import PopUpDialog from '../../../Components/PopUpDialog';
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

        <PopUpDialog
          title='Post Image'
          dialogContent={<img className='shadow rounded' src={post.image()} alt='Post Image' />}
        >
          <CardMedia
            className='clickable rounded'
            image={post.image()}
            alt='Post Image'
            style={{ height: '10em', marginTop: '1em' }}
          />
        </PopUpDialog>
      </CardContent>

      <CardActions>
        <Button>Share</Button>
        <Button>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
