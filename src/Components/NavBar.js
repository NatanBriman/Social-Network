import { Logout } from '@mui/icons-material';
import { AppBar, Avatar, Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { userActions, userSelector } from '../Redux/Features/User/UserSlice';
import { ColorModeContext } from '../Theme/ThemeContext';
import { LOGIN_ROUTE } from '../Utils/Constants';
import DropDownMenu from './DropDownMenu';

const NavBar = ({ routes }) => {
  const { username, image } = useSelector(userSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorElementUser, setAnchorElementUser] = useState(null);
  const handleOpenUserMenu = ({ currentTarget }) => setAnchorElementUser(currentTarget);
  const handleCloseUserMenu = () => setAnchorElementUser(null);

  const { toggleColorMode, currentThemeIcon } = useContext(ColorModeContext);
  const { pathname } = useLocation();
  const isCurrentRoute = (route) => route === pathname;

  const settings = [
    {
      text: 'Logout',
      icon: <Logout />,
      action: () => {
        const { logout } = userActions;

        dispatch(logout());
        navigate(LOGIN_ROUTE);
      },
    },
  ];

  return (
    <AppBar color='default' position='sticky'>
      <Grid m={1} display='flex' justifyContent='space-between'>
        <Grid display='flex' alignItems='center'>
          <Avatar
            className='shadow clickable'
            style={{ width: '3em', height: '3em' }}
            alt={username}
            src={image}
            onClick={handleOpenUserMenu}
          />

          <DropDownMenu
            items={settings}
            anchorElement={anchorElementUser}
            open={Boolean(anchorElementUser)}
            handleCloseMenu={handleCloseUserMenu}
          />

          <Box ml={2}>
            <Typography variant='body1'>Hey,</Typography>

            <Typography variant='h5'>
              <strong>{username}</strong>
            </Typography>
          </Box>

          <Box ml={1}>
            <IconButton onClick={toggleColorMode}>{currentThemeIcon()}</IconButton>
          </Box>
        </Grid>

        <Grid className='centered-content-row'>
          {routes.map(({ path, text }) => (
            <Box key={path} ml={1}>
              <Button
                onClick={() => navigate(path)}
                style={{
                  fontSize: '1.5rem',
                  textDecoration: isCurrentRoute(path) && 'underline',
                }}
              >
                {text}
              </Button>
            </Box>
          ))}
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
