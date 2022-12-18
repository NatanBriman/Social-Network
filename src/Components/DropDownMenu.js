import { Menu, MenuItem, Typography } from '@mui/material';

const DropDownMenu = ({ items, anchorElement, open, handleCloseMenu }) => {
  return (
    <Menu anchorEl={anchorElement} keepMounted open={open} onClose={handleCloseMenu}>
      {items.map(({ text, icon, action }) => (
        <MenuItem
          style={{ width: '7em' }}
          key={text}
          onClick={() => {
            handleCloseMenu();
            action();
          }}
        >
          <Typography className='max-width between-spaced-content'>
            {icon} {text}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DropDownMenu;
