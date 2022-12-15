import { Box, Paper } from '@mui/material';
import Post from '../../../../Models/Post/Post';
import UserDTO from '../../../../Models/User/UserDTO';
import PostCard from './PostCard';

const PostsFeed = ({ style }) => {
  const POSTS = [
    new Post(
      new UserDTO(
        'Example Name',
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
      ),
      new Date(),
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      'This is the description...'
    ),
    new Post(
      new UserDTO(
        'Example Name',
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
      ),
      new Date(),
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      'This is the description...'
    ),
    new Post(
      new UserDTO(
        'Example Name',
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
      ),
      new Date(),
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      'This is the description...'
    ),
    new Post(
      new UserDTO(
        'Example Name',
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
      ),
      new Date(),
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      'This is the description...'
    ),
    new Post(
      new UserDTO(
        'Example Name',
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
      ),
      new Date(),
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      'This is the description...'
    ),
    new Post(
      new UserDTO(
        'Example Name',
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
      ),
      new Date(),
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      'This is the description...'
    ),
    new Post(
      new UserDTO(
        'Example Name',
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
      ),
      new Date(),
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      'This is the description...'
    ),
  ];

  return (
    <Paper elevation={24} className='shadow rounded' style={style}>
      <Box
        p={2}
        pb={0}
        display='flex'
        flexDirection='column'
        alignItems='center'
        className='scroll'
        style={{ maxHeight: '80vh', minHeight: '40vh' }}
      >
        {POSTS.map((post) => (
          <Box key={post.id()} mb={3} width='100%'>
            <PostCard post={post} />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default PostsFeed;
