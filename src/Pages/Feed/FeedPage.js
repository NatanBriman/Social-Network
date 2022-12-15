import { Grid } from '@mui/material';
import FriendsRecommendations from './Components/FriendsRecommendations/FriendsRecommendations';
import PostsFeed from './Components/Post/PostsFeed';

const FeedPage = () => {
  return (
    <Grid height='100%' my={2} display='flex' alignItems='center' justifyContent='space-evenly'>
      <PostsFeed style={{ width: '40%' }} />

      <FriendsRecommendations style={{ width: '30%', alignSelf: 'flex-start' }} />
    </Grid>
  );
};

export default FeedPage;
