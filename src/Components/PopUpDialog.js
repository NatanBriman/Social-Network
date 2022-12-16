import { Box, Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';

const PopUpDialog = ({ children, dialogContent, title }) => {
  const [isShowDialog, setIsShowDialog] = useState(false);
  const toggleIsShowModal = () => setIsShowDialog((isShowModal) => !isShowModal);
  const handleClose = () => setIsShowDialog(false);

  return (
    <>
      <div onClick={toggleIsShowModal}>{children}</div>

      <Dialog open={isShowDialog} onClose={handleClose}>
        <DialogTitle textAlign='center'>{title}</DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
        <Box className='centered-content' mb={1}>
          <Button variant='outlined' onClick={handleClose} autoFocus>
            Close
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default PopUpDialog;
