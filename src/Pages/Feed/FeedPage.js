import { Grid } from '@mui/material';
import FriendsRecommendationsFeed from './Components/FriendsRecommendations/FriendsRecommendationsFeed';
import PostsFeed from './Components/Post/PostsFeed';

const FeedPage = () => {
  return (
    <Grid height='100%' my={2} display='flex' alignItems='center' justifyContent='space-evenly'>
      <PostsFeed style={{ width: '40%', alignSelf: 'flex-start' }} />

      <FriendsRecommendationsFeed style={{ width: '30%', alignSelf: 'flex-start' }} />
    </Grid>
  );
};

export default FeedPage;
