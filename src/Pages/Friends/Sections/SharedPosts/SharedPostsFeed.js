import { useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Feed from '../../../../Components/Feed';
import PostCard from '../../../../Pages/Feed/Sections/PostsFeed/PostCard';
import { userSelector } from '../../../../Redux/Features/User/UserSlice';
import SelectedFriendContext from '../../SelectedFriendContext';

const SharedPostsFeed = ({ paperStyle }) => {
  const [selectedFriend, _] = useContext(SelectedFriendContext);
  const { sharedPosts } = useSelector(userSelector);

  const sharedPostsBySelectedFriend = useMemo(() => {
    const sharedPostsAndIdsBySelectedFriend = sharedPosts.filter(
      ({ sharedBy }) => sharedBy === selectedFriend?.id
    );
    const sharedPostsBySelectedFriend = sharedPostsAndIdsBySelectedFriend.map(({ post }) => post);

    return sharedPostsBySelectedFriend;
  }, [sharedPosts, selectedFriend?.id]);

  return (
    <Feed
      paperStyle={paperStyle}
      feedStyle={{ maxHeight: '70vh' }}
      title='Shared Posts'
      items={sharedPostsBySelectedFriend}
      component={(post) => <PostCard post={post} />}
      emptyText={`${selectedFriend?.username} didn't share any posts with you yet`}
    />
  );
};

export default SharedPostsFeed;
