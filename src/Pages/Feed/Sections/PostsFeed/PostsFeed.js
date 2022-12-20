import api from '../../../../Api/Api';
import Feed from '../../../../Components/Feed';
import useLocalStorageFromAPI from '../../../../Hooks/useLocalStorageFromAPI';
import { LOCAL_STORAGE_KEYS } from '../../../../Utils/Constants';
import PostCard from './PostCard';

const PostsFeed = ({ paperStyle }) => {
  const [posts, setPosts, isLoading] = useLocalStorageFromAPI(
    [],
    api.posts.getAllPosts,
    LOCAL_STORAGE_KEYS.posts
  );

  return (
    <Feed
      paperStyle={paperStyle}
      feedStyle={{ maxHeight: '70vh', minHeight: '40vh' }}
      title='Posts Feed'
      items={posts}
      component={(post) => <PostCard post={post} />}
      emptyText='There are no posts at the moment'
      isLoading={isLoading}
    />
  );
};

export default PostsFeed;
