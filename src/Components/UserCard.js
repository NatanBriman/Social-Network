import { Avatar, Box, Card, CardHeader, Typography } from '@mui/material';

const UserCard = ({ user, children }) => {
  return (
    <Card className='shadow rounded'>
      <Box display='flex'>
        <CardHeader
          className='max-width'
          avatar={<Avatar className='shadow' src={user.image()} alt={user.username()} />}
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
