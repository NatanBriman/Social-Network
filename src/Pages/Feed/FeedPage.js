import { Grid } from '@mui/material';
import PostsFeed from './Components/Post/PostsFeed';
import RecommendedFriendsFeed from './Components/RecommendedFriends/RecommendedFriendsFeed';

const FeedPage = () => {
  return (
    <Grid my={2} display='flex' alignItems='center' justifyContent='space-evenly'>
      <PostsFeed style={{ width: '40%', alignSelf: 'flex-start', minHeight: '80vh' }} />

      <RecommendedFriendsFeed
        style={{ width: '30%', alignSelf: 'flex-start', minHeight: '30vh' }}
      />
    </Grid>
  );
};

export default FeedPage;
