import { Box, Divider, Paper, Typography } from '@mui/material';

const FriendsRecommendations = ({ style }) => {
  return (
    <Paper elevation={24} className='shadow rounded' style={style}>
      <Typography textAlign='center' variant='h5' p={2}>
        Recommended Friends
      </Typography>
      <Divider />
      <Box
        p={2}
        pb={0}
        display='flex'
        flexDirection='column'
        alignItems='center'
        className='scroll'
        style={{ maxHeight: '80vh', minHeight: '30vh' }}
      >
        {/* {POSTS.map((post) => (
          <Box key={post.id()} mb={3} width='100%'>
            <PostCard post={post} />
          </Box>
        ))} */}
      </Box>
    </Paper>
  );
};

export default FriendsRecommendations;
