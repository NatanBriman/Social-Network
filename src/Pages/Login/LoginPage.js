import { Box, Grid, Typography } from '@mui/material';
import UsersFeed from './Components/UsersFeed';

const LoginPage = () => {
  return (
    <Grid className='max-height centered-content-column'>
      <Box height='30%' className='max-width centered-content-row'>
        <Typography color='primary' variant='h1'>
          Welcome to Social Network
        </Typography>
      </Box>

      <Box height='70%' className='max-width centered-content-row'>
        <UsersFeed paperStyle={{ width: '70%' }} />
      </Box>
    </Grid>
  );
};

export default LoginPage;
