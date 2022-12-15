import Feed from '../../../../Components/Feed';
import UserDTO from '../../../../Models/User/UserDTO';
import FriendRecommendation from './FriendRecommendation';

const FriendsRecommendationsFeed = ({ style }) => {
  const FRIENDS_RECOMMENDATIONS = [
    new UserDTO(
      2,
      'Natan Briman',
      'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600'
    ),
  ];

  return (
    <Feed
      paperStyle={style}
      feedStyle={{ maxHeight: '80vh', minHeight: '30vh' }}
      title='Recommended Friends'
      items={FRIENDS_RECOMMENDATIONS}
      component={(friend) => <FriendRecommendation user={friend} />}
    />
    // <Paper elevation={24} className='shadow rounded' style={style}>
    //   <Typography textAlign='center' variant='h5' p={2}>
    //     Recommended Friends
    //   </Typography>
    //   <Divider />
    //   <Box
    //     p={2}
    //     pb={0}
    //     display='flex'
    //     flexDirection='column'
    //     alignItems='center'
    //     className='scroll'
    //     style={{ maxHeight: '80vh', minHeight: '30vh' }}
    //   >
    //     {FRIENDS_RECOMMENDATIONS.map((friend) => (
    //       <Box key={friend.id()} mb={3} className='max-width'>
    //         <FriendRecommendation user={friend} />
    //       </Box>
    //     ))}
    //   </Box>
    // </Paper>
  );
};

export default FriendsRecommendationsFeed;
