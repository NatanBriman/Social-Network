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
      'data:image/jpeg;base64,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',
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