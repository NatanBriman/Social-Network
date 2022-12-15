import { Grid } from '@mui/material';

import FriendsFeed from './Components/FriendsFeed';

const FriendsPage = () => {
  return (
    <Grid height='100%' my={2} display='flex' alignItems='center' justifyContent='space-evenly'>
      <FriendsFeed style={{ width: '50%', alignSelf: 'flex-start' }} />
    </Grid>
  );
};
export default FriendsPage;
