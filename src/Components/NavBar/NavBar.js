import { AppBar, Box, Button, IconButton, Typography } from '@mui/material';
import { useCallback, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { userSelector } from '../../Redux/Features/User/UserSlice';
import { ThemeColorContext } from '../../Theme/ThemeContext';
import AvatarButton from './AvatarButton';

const NavBar = ({ routes }) => {
  const navigate = useNavigate();
  const { username, image } = useSelector(userSelector);
  const { toggleColorTheme, currentThemeIcon } = useContext(ThemeColorContext);

  const { pathname } = useLocation();
  const isCurrentRoute = useCallback((route) => route === pathname, [pathname]);

  return (
    <AppBar position='sticky'>
      <Box m={1} className='between-spaced-content'>
        <Box className='evenly-spaced-content'>
          <AvatarButton image={image} username={username} />

          <Box ml={2}>
            <Typography variant='body1'>Hey,</Typography>

            <Typography variant='h5'>
              <strong>{username}</strong>
            </Typography>
          </Box>
        </Box>

        <IconButton onClick={toggleColorTheme}>{currentThemeIcon()}</IconButton>

        <Box className='centered-content-row' gap={1}>
          {routes.map(({ path, text }) => (
            <Box key={path}>
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
