import { Avatar, Box, Card, CardHeader, Typography } from '@mui/material';
import PopUpDialog from './PopUpDialog';

const UserCard = ({ user, children }) => {
  return (
    <Card className='shadow rounded'>
      <Box display='flex'>
        <CardHeader
          className='max-width'
          avatar={
            <PopUpDialog
              title={user.username()}
              dialogContent={
                <img
                  style={{ maxHeight: '50vh', maxWidth: '80wh' }}
                  className='shadow rounded'
                  src={user.image()}
                  alt={user.username()}
                />
              }
            >
              <Avatar className='shadow clickable' src={user.image()} alt={user.username()} />
            </PopUpDialog>
          }
          title={
            <Typography
              variant='h5'
              display='flex'
              alignItems='center'
              justifyContent='space-between'
            >
              {user.username()}
              {children}
            </Typography>
          }
        />
      </Box>
    </Card>
  );
};

export default UserCard;
