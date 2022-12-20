import Feed from '../../../../Components/Feed';
import PostCard from '../../../../Pages/Feed/Sections/PostsFeed/PostCard';

const SharedPostsFeed = ({ sharedById, sharedByUsername, paperStyle }) => {
  const posts = [];
  const isLoading = false;

  return (
    <Feed
      paperStyle={paperStyle}
      feedStyle={{ maxHeight: '70vh' }}
      title='Shared Posts'
      items={posts}
      component={(post) => <PostCard post={post} />}
      emptyText={`${sharedByUsername} didn't share any posts with you yet`}
      isLoading={isLoading}
    />
  );
};

export default SharedPostsFeed;
