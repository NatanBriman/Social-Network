import { Grid } from '@mui/material';
import PostsFeed from './Components/PostsFeed';

const FeedPage = () => {
  return (
    <Grid height='100%' my={2} display='flex' alignItems='center' justifyContent='center'>
      <PostsFeed style={{ width: '40%' }} />
    </Grid>
  );
};

export default FeedPage;
