import { Box } from '@mui/system';
import Post from '../../Models/Post/Post';
import UserDTO from '../../Models/User/UserDTO';
import PostCard from './PostCard';

const FeedPage = () => {
  const POSTS = [
    new Post(
      new UserDTO(
        'Dor Farhi',
        'https://instagram.ftlv6-1.fna.fbcdn.net/v/t51.2885-19/135794636_158052519105640_181296896877705892_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftlv6-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=eKPAb0jnZZQAX8XAGj-&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfCwIyNIiEvhZFK3pr2LY1PD2cGx2LFtgdFqNCdRdB1_Bg&oe=639D8C81&_nc_sid=6136e7'
      ),
      new Date(),
      'https://media.istoreil.co.il/57482e8d-29d5-4d9f-84d5-bd696304a4e0/https://www.istoreil.co.il/media/catalog/product/cache/1/image/1000x/0dc2d03fe217f8c83829496872af24a0/i/p/iphone_14_hero_purple.png/f_auto',
      'DESCRIPTION'
    ),
    new Post(
      new UserDTO(
        'Dor Farhi',
        'https://instagram.ftlv6-1.fna.fbcdn.net/v/t51.2885-19/135794636_158052519105640_181296896877705892_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftlv6-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=eKPAb0jnZZQAX8XAGj-&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfCwIyNIiEvhZFK3pr2LY1PD2cGx2LFtgdFqNCdRdB1_Bg&oe=639D8C81&_nc_sid=6136e7'
      ),
      new Date(),
      'https://media.istoreil.co.il/57482e8d-29d5-4d9f-84d5-bd696304a4e0/https://www.istoreil.co.il/media/catalog/product/cache/1/image/1000x/0dc2d03fe217f8c83829496872af24a0/i/p/iphone_14_hero_purple.png/f_auto',
      'DESCRIPTION'
    ),
    new Post(
      new UserDTO(
        'Dor Farhi',
        'https://instagram.ftlv6-1.fna.fbcdn.net/v/t51.2885-19/135794636_158052519105640_181296896877705892_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftlv6-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=eKPAb0jnZZQAX8XAGj-&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfCwIyNIiEvhZFK3pr2LY1PD2cGx2LFtgdFqNCdRdB1_Bg&oe=639D8C81&_nc_sid=6136e7'
      ),
      new Date(),
      'https://media.istoreil.co.il/57482e8d-29d5-4d9f-84d5-bd696304a4e0/https://www.istoreil.co.il/media/catalog/product/cache/1/image/1000x/0dc2d03fe217f8c83829496872af24a0/i/p/iphone_14_hero_purple.png/f_auto',
      'DESCRIPTION'
    ),
    new Post(
      new UserDTO(
        'Dor Farhi',
        'https://instagram.ftlv6-1.fna.fbcdn.net/v/t51.2885-19/135794636_158052519105640_181296896877705892_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftlv6-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=eKPAb0jnZZQAX8XAGj-&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfCwIyNIiEvhZFK3pr2LY1PD2cGx2LFtgdFqNCdRdB1_Bg&oe=639D8C81&_nc_sid=6136e7'
      ),
      new Date(),
      'https://media.istoreil.co.il/57482e8d-29d5-4d9f-84d5-bd696304a4e0/https://www.istoreil.co.il/media/catalog/product/cache/1/image/1000x/0dc2d03fe217f8c83829496872af24a0/i/p/iphone_14_hero_purple.png/f_auto',
      'DESCRIPTION'
    ),
  ];

  return (
    <Box
      border='1px solid red'
      display='flex'
      flexDirection='column'
      alignItems='center'
      height='100%'
      boxSizing='border-box'
      p={1}
    >
      {POSTS.map((post) => (
        <Box key={post.id()} p={1} width='100%'>
          <PostCard post={post} />
        </Box>
      ))}
    </Box>
  );
};

export default FeedPage;
