import api from '../../../../Api/Api';
import Feed from '../../../../Components/Feed';
import useDataFromAPI from '../../../../Hooks/useDataFromAPI';
import PostCard from './PostCard';

const PostsFeed = ({ style }) => {
  const [posts, setPosts] = useDataFromAPI([], api.posts.getAllPosts);

  return (
    <Feed
      paperStyle={style}
      feedStyle={{ maxHeight: '70vh', minHeight: '40vh' }}
      title='Posts Feed'
      items={posts}
      component={(post) => <PostCard post={post} />}
      emptyText='There are no posts at the moment'
    />
  );
};

export default PostsFeed;
