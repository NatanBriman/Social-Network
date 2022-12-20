import { Grid } from '@mui/material';
import FriendsFeed from './Sections/Friends/FriendsFeed';
import SharedPostsFeed from './Sections/SharedPosts/SharedPostsFeed';

const FriendsPage = () => {
  return (
    <Grid height='100%' my={2} display='flex' justifyContent='space-evenly'>
      <SharedPostsFeed paperStyle={{ width: '40%', alignSelf: 'flex-start', height: '80vh' }} />

      <FriendsFeed paperStyle={{ width: '30%', alignSelf: 'flex-start' }} />
    </Grid>
  );
};

export default FriendsPage;
