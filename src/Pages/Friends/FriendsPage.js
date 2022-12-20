import { Grid } from '@mui/material';
import { useState } from 'react';
import FriendsFeed from './Sections/Friends/FriendsFeed';
import SharedPostsFeed from './Sections/SharedPosts/SharedPostsFeed';
import { SelectedFriendProvider } from './SelectedFriendContext';

const FriendsPage = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);

  return (
    <SelectedFriendProvider value={[selectedFriend, setSelectedFriend]}>
      <Grid height='100%' my={2} display='flex' justifyContent='space-evenly'>
        <SharedPostsFeed paperStyle={{ width: '40%', alignSelf: 'flex-start', height: '80vh' }} />

        <FriendsFeed paperStyle={{ width: '30%', alignSelf: 'flex-start' }} />
      </Grid>
    </SelectedFriendProvider>
  );
};

export default FriendsPage;
