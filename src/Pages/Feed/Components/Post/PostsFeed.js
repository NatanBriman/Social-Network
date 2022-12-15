import Feed from '../../../../Components/Feed';
import PostCard from './PostCard';

const PostsFeed = ({ style }) => {
  const POSTS = [
    {
      id: 'bc050084-fa9b-19c9-a16b-9e5b8277bab1',
      author: {
        id: 1,
        username: 'Example Name',
        image:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      date: new Date(),
      image:
        'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      description: 'This is the description...',
    },
    {
      id: 'bc050054-fa9b-19c9-a16b-9e5b8277bab1',
      author: {
        id: 1,
        username: 'Example Name',
        image:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      date: new Date(),
      image:
        'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      description: 'This is the description...',
    },
    {
      id: 'bc052084-fa9b-19c9-a16b-9e5b8277bab1',
      author: {
        id: 1,
        username: 'Example Name',
        image:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      date: new Date(),
      image:
        'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      description: 'This is the description...',
    },
    {
      id: 'bc150084-fa9b-19c9-a16b-9e5b8277bab1',
      author: {
        id: 1,
        username: 'Example Name',
        image:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      date: new Date(),
      image:
        'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      description: 'This is the description...',
    },
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
