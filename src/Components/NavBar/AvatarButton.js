import { Logout } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../../Redux/Features/User/UserSlice';
import { LOGIN_ROUTE } from '../../Utils/Constants';
import DropDownMenu, { createMenuItem } from '../DropDownMenu';

const AvatarButton = ({ image, username }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userMenuAnchorElement, setUserMenuAnchorElement] = useState(null);
  const handleOpenUserMenu = ({ currentTarget }) => setUserMenuAnchorElement(currentTarget);
  const handleCloseUserMenu = () => setUserMenuAnchorElement(null);

  const settings = useMemo(
    () => [
      createMenuItem('Logout', <Logout />, () => {
        const { logout } = userActions;

        dispatch(logout());
        navigate(LOGIN_ROUTE);
      }),
    ],
    [LOGIN_ROUTE]
  );

  return (
    <>
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
    </>
  );
};

export default AvatarButton;
