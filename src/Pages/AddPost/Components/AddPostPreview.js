import { Box } from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../Redux/Features/User/UserSlice';
import PostCard from '../../Feed/Components/Post/PostCard';
import { createPost } from '../AddPostPage';

const AddPostPreview = ({ style, description, postImage }) => {
  const { username, image } = useSelector(userSelector);

  const post = useMemo(
    () => createPost(image, username, description, postImage || 'src'),
    [description, postImage]
  );

  return (
    <Box style={style}>
      <PostCard post={post} />
    </Box>
  );
};

export default AddPostPreview;
