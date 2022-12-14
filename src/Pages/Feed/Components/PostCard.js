import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const PostCard = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => setIsExpanded((isExpanded) => !isExpanded);

  const descriptionThatFits = post.description().slice(0, 169);

  return (
    <Card className='post rounded'>
      <CardHeader
        avatar={<Avatar src={post.author().image()} alt={post.author().username()} />}
        title={<Typography variant='h5'>{post.author().username()}</Typography>}
      />

      <CardContent style={{ paddingTop: 0 }}>
        <Box>
          <Typography variant='body2' color='text.secondary'>
            {!isExpanded ? descriptionThatFits : post.description()}

            <Link style={{ cursor: 'pointer' }} onClick={toggleIsExpanded}>
              {!isExpanded ? '...read more' : ' show less'}
            </Link>
          </Typography>
        </Box>

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
