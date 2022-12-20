import { Box, Menu, MenuItem, Typography } from '@mui/material';

export const createMenuItem = (text, icon, action) => {
  return { text, icon, action };
};

const DropDownMenu = ({ items, anchorElement, open, handleCloseMenu }) => {
  return (
    <Menu anchorEl={anchorElement} keepMounted open={open} onClose={handleCloseMenu}>
      {items.map(({ text, icon, action }) => (
        <MenuItem
          key={text}
          onClick={() => {
            handleCloseMenu();
            action();
          }}
        >
          <Box display='flex' alignItems='center'>
            {icon}

            <Typography variant='h6' ml={1}>
              {text}
            </Typography>
          </Box>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DropDownMenu;
