import { Grid } from '@mui/material';
import PostsFeed from './Components/PostsFeed';

const FeedPage = () => {
  return (
    <Grid mt={1} display='flex' alignItems='center' justifyContent='center'>
      <PostsFeed />
    </Grid>
  );
};

export default FeedPage;
