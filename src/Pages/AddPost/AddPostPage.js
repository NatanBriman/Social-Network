import { Grid } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import useLocalStorage from '../../Hooks/useLocalStorage';
import { userSelector } from '../../Redux/Features/User/UserSlice';
import { LOCAL_STORAGE_KEYS } from '../../Utils/Constants';
import { showToast } from '../../Utils/Helpers';
import AddPostForm from './Components/AddPostForm';
import AddPostPreview from './Components/AddPostPreview';

export const createPost = (authorImage, authorUsername, description, postImage) => {
  return {
    id: uuid(),
    author: { username: authorUsername, image: authorImage },
    description,
    image: postImage,
    date: new Date(),
  };
};

const AddPostPage = () => {
  const [posts, setPosts] = useLocalStorage(LOCAL_STORAGE_KEYS.posts, []);
  const { username, image } = useSelector(userSelector);
  const [description, setDescription] = useState('');
  const [postImage, setPostImage] = useState('');
  // TODO: Handle submit error!
  const clearValues = () => {
    setDescription('');
    setPostImage('');
  };

  const handleAddPost = () => {
    const newPost = createPost(image, username, description, postImage);

    setPosts((posts) => [...posts, newPost]);
    showToast('Your post was added successfully!');
    clearValues();
  };

  return (
    <Grid my={2} className='evenly-spaced-content'>
      <AddPostPreview style={{ width: '40vw' }} description={description} postImage={postImage} />

      <AddPostForm
        description={description}
        image={postImage}
        handleAddPost={handleAddPost}
        setDescription={setDescription}
        setImage={setPostImage}
        paperStyle={{ width: '40%' }}
      />
    </Grid>
  );
};

export default AddPostPage;
