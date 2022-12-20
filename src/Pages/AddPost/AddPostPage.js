import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import Form, { createFormInput } from '../../Components/Form';
import useLocalStorage from '../../Hooks/useLocalStorage';
import { userSelector } from '../../Redux/Features/User/UserSlice';
import { LOCAL_STORAGE_KEYS } from '../../Utils/Constants';
import { getExtendedArray, showToast } from '../../Utils/Helpers';
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
  const { username, image } = useSelector(userSelector);
  const [_, setPosts] = useLocalStorage(LOCAL_STORAGE_KEYS.posts, []);
  const [description, setDescription] = useState('');
  const [postImage, setPostImage] = useState('');
  // TODO: Handle submit error!
  const clearValues = () => {
    setDescription('');
    setPostImage('');
  };

  const formInputs = [
    createFormInput(
      description,
      ({ target: { value } }) => setDescription(value),
      'Description',
      "What's on your mind?",
      true,
      true,
      true
    ),
    createFormInput(
      postImage,
      ({ target: { value } }) => setPostImage(value),
      'Image',
      'Upload image URL',
      true,
      true
    ),
  ];

  const handleAddPost = () => {
    const newPost = createPost(image, username, description, postImage);

    setPosts((posts) => getExtendedArray(posts, newPost));
    showToast('Your post was added successfully!');
    clearValues();
  };

  return (
    <Grid my={2} className='evenly-spaced-content'>
      <AddPostPreview style={{ width: '40vw' }} description={description} postImage={postImage} />

      <Form paperStyle={{ width: '40%' }} title='Create New Post' formInputs={formInputs}>
        <Button onClick={handleAddPost} variant='outlined' color='success'>
          Add Post
        </Button>
      </Form>
    </Grid>
  );
};

export default AddPostPage;
