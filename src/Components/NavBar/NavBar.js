import { AppBar, Avatar, Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSelector } from '../../Redux/Features/UserSlice';
import { ColorModeContext } from '../../Theme/ThemeContext';

const NavBar = ({ routes }) => {
  const user = useSelector(userSelector);
  const { toggleColorMode, currentThemeIcon } = useContext(ColorModeContext);
  // TODO: Make current route bolder

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

          <Box ml={1}>
            <IconButton onClick={toggleColorMode}>{currentThemeIcon()}</IconButton>
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
