import Feed from '../../../../Components/Feed';
import Post from '../../../../Models/Post/Post';
import UserDTO from '../../../../Models/User/UserDTO';
import PostCard from './PostCard';

const PostsFeed = ({ style }) => {
  const POSTS = [
    new Post(
      new UserDTO(
        1,
        'Example Name',
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
      ),
      new Date(),
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      'This is the description...'
    ),
    new Post(
      new UserDTO(
        1,
        'Example Name',
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
      ),
      new Date(),
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      'This is the description...'
    ),
    new Post(
      new UserDTO(
        1,
        'Example Name',
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
      ),
      new Date(),
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      'This is the description...'
    ),
    new Post(
      new UserDTO(
        1,
        'Example Name',
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
      ),
      new Date(),
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      'This is the description...'
    ),
    new Post(
      new UserDTO(
        1,
        'Example Name',
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
      ),
      new Date(),
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      'This is the description...'
    ),
    new Post(
      new UserDTO(
        1,
        'Example Name',
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
      ),
      new Date(),
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      'This is the description...'
    ),
    new Post(
      new UserDTO(
        1,
        'Example Name',
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
      ),
      new Date(),
      'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      'This is the description...'
    ),
  ];

  return (
    <Feed
      paperStyle={style}
      feedStyle={{ maxHeight: '70vh', minHeight: '40vh' }}
      title='Feed'
      items={POSTS}
      component={(post) => <PostCard post={post} />}
    />
  );
};

export default PostsFeed;
