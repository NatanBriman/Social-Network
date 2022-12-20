import { Grid } from '@mui/material';
import PostsFeed from './Sections/PostsFeed/PostsFeed';
import RecommendedFriendsFeed from './Sections/RecommendedFriends/RecommendedFriendsFeed';

const FeedPage = () => {
  return (
    <Grid my={2} className='evenly-spaced-content'>
      <PostsFeed paperStyle={{ width: '40%', alignSelf: 'flex-start', height: '80vh' }} />

      <RecommendedFriendsFeed paperStyle={{ width: '30%', alignSelf: 'flex-start' }} />
    </Grid>
  );
};

export default FeedPage;
