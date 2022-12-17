import { Grid } from '@mui/material';
import UsersFeed from './Components/UsersFeed';

const LoginPage = () => {
  return (
    <Grid height='100vh' className='centered-content'>
      <UsersFeed paperStyle={{ width: '70%' }} />
    </Grid>
  );
};

export default LoginPage;
