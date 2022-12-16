import { Grid } from '@mui/material';
import FriendsFeed from './Components/FriendsFeed';
// TODO: Create error alerts when trying to add an existing friend,
// and success messages when succeeding
const FriendsPage = () => {
  return (
    <Grid height='100%' my={2} display='flex' alignItems='center' justifyContent='space-evenly'>
      <FriendsFeed style={{ width: '50%', alignSelf: 'flex-start' }} />
    </Grid>
  );
};

export default FriendsPage;
