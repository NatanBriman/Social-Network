import { Logout } from '@mui/icons-material';
import { AppBar, Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { userActions, userSelector } from '../Redux/Features/User/UserSlice';
import { ThemeColorContext } from '../Theme/ThemeContext';
import { LOGIN_ROUTE } from '../Utils/Constants';
import DropDownMenu from './DropDownMenu';

const NavBar = ({ routes }) => {
  const { username, image } = useSelector(userSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userMenuAnchorElement, setUserMenuAnchorElement] = useState(null);
  const handleOpenUserMenu = ({ currentTarget }) => setUserMenuAnchorElement(currentTarget);
  const handleCloseUserMenu = () => setUserMenuAnchorElement(null);

  const { toggleColorTheme, currentThemeIcon } = useContext(ThemeColorContext);
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
    <AppBar position='sticky'>
      <Box m={1} className='between-spaced-content'>
        <Box className='evenly-spaced-content'>
          <Avatar
            className='shadow clickable'
            style={{ width: '3em', height: '3em' }}
            alt={username}
            src={image}
            onClick={handleOpenUserMenu}
          />

          <DropDownMenu
            items={settings}
            anchorElement={userMenuAnchorElement}
            open={Boolean(userMenuAnchorElement)}
            handleCloseMenu={handleCloseUserMenu}
          />

          <Box ml={2}>
            <Typography variant='body1'>Hey,</Typography>

            <Typography variant='h5'>
              <strong>{username}</strong>
            </Typography>
          </Box>
        </Box>

        <IconButton onClick={toggleColorTheme}>{currentThemeIcon()}</IconButton>

        <Box className='centered-content-row'>
          {routes.map(({ path, text }) => (
            <Box key={path} ml={1}>
              <Button onClick={() => navigate(path)}>
                <Typography
                  style={{ textDecoration: isCurrentRoute(path) && 'underline' }}
                  color='Menu'
                  variant='h5'
                >
                  {text}
                </Typography>
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </AppBar>
  );
};

export default NavBar;
