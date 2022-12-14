import { Box } from '@mui/system';
import Post from '../../../Models/Post/Post';
import UserDTO from '../../../Models/User/UserDTO';
import PostCard from './PostCard';

const PostsFeed = () => {
  const POSTS = [
    new Post(
      new UserDTO(
        'Dor Farhi',
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
      ),
      new Date(),
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      'DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION'
    ),
  ];

  return (
    <Box display='flex' flexDirection='column' alignItems='center' width='40%' p={1}>
      {POSTS.map((post) => (
        <Box key={post.id()} width='100%'>
          <PostCard post={post} />
        </Box>
      ))}
    </Box>
  );
};

export default PostsFeed;
