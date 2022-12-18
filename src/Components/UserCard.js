import { Avatar, Card, CardHeader } from '@mui/material';
import PopUpDialog from './PopUpDialog';

const UserCard = ({ user, children, isRow = false, cardStyle, avatarStyle, cardClasses }) => {
  return (
    <Card className={`${cardClasses} shadow rounded`} style={cardStyle}>
      <CardHeader
        className={`${isRow ? 'max-width flex-row' : 'max-height flex-col'} evenly-spaced-content`}
        avatar={
          <PopUpDialog
            title={user.username}
            dialogContent={
              <img
                style={{ maxHeight: '50vh', maxWidth: '80wh' }}
                className='shadow rounded'
                src={user.image}
                alt={user.username}
              />
            }
          >
            <Avatar
              style={avatarStyle}
              className='shadow clickable'
              src={user.image}
              alt={user.username}
            />
          </PopUpDialog>
        }
        title={
          <>
            {user.username}
            {children}
          </>
        }
        titleTypographyProps={{
          variant: 'h5',
          className: `${
            isRow ? 'flex-row' : 'flex-col'
          } max-height text-center between-spaced-content`,
        }}
      />
    </Card>
  );
};

export default UserCard;
