import { AppBar, Avatar, Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { userSelector } from '../Redux/Features/UserSlice';
import { ColorModeContext } from '../Theme/ThemeContext';

const NavBar = ({ routes }) => {
  const user = useSelector(userSelector);
  useEffect(() => {
    console.dir(user);
  }, [user]);

  const { toggleColorMode, currentThemeIcon } = useContext(ColorModeContext);

  const currentRoute = useLocation().pathname;
  const isCurrentRoute = (route) => route === currentRoute;

  return (
    <AppBar color='default' position='sticky'>
      <Grid m={1} display='flex' justifyContent='space-between'>
        <Grid display='flex' alignItems='center'>
          <Avatar
            className='shadow'
            style={{ width: '3em', height: '3em' }}
            alt={user.username}
            src={user.image}
          />

          <Box ml={2}>
            <Typography variant='body1'>Hey,</Typography>

            <Typography variant='h5'>
              <strong>{user.username}</strong>
            </Typography>
          </Box>

          <Box ml={1}>
            <IconButton onClick={toggleColorMode}>{currentThemeIcon()}</IconButton>
          </Box>
        </Grid>

        <Grid display='flex' justifyContent='center' alignItems='center'>
          {routes.map(({ path, text }) => (
            <Box key={path} ml={1}>
              <Button>
                <Link
                  to={path}
                  style={{
                    fontSize: '1.5rem',
                    textDecoration: isCurrentRoute(path) && 'underline',
                  }}
                >
                  {text}
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
