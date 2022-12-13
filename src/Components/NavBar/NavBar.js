import { AppBar, Avatar, Box, Button, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSelector } from '../../Redux/Features/UserSlice';

const NavBar = ({ routes }) => {
  const user = useSelector(userSelector);
  // TODO: Make the current route bolder
  return (
    <AppBar color='default' position='sticky'>
      <Grid m={1} display='flex' justifyContent='space-between' alignItems='center'>
        <Grid display='flex' justifyContent='space-between' alignItems='center'>
          <Avatar
            style={{ width: '3em', height: '3em' }}
            alt={user.username()}
            src={user.image()}
          />

          <Box ml={2}>
            <Typography variant='body1'>Hey,</Typography>

            <Typography variant='h5'>
              <strong>{user.username()}</strong>
            </Typography>
          </Box>
        </Grid>

        <Grid display='flex'>
          {routes.map((route) => (
            <Box key={route.path} ml={1}>
              <Button>
                <Link to={route.path} style={{ fontSize: '1.3rem' }}>
                  {route.text}
                </Link>
              </Button>
            </Box>
          ))}
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
