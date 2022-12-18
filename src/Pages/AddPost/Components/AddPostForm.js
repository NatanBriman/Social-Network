import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import useLocalStorage from '../../../Hooks/useLocalStorage';
import { userSelector } from '../../../Redux/Features/User/UserSlice';
import { LOCAL_STORAGE_KEYS } from '../../../Utils/Constants';

const createPost = (authorImage, authorUsername, description, postImage) => {
  return {
    id: uuid(),
    author: { username: authorUsername, image: authorImage },
    description,
    image: postImage,
    date: new Date(),
  };
};

const AddPostForm = ({ paperStyle }) => {
  const [posts, setPosts] = useLocalStorage(LOCAL_STORAGE_KEYS.posts, []);
  const { username, image } = useSelector(userSelector);
  const descriptionRef = useRef();
  const imageRef = useRef();

  const handleAddPost = () => {
    const newPost = createPost(
      image,
      username,
      descriptionRef.current.value,
      imageRef.current.value
    );

    setPosts((posts) => [...posts, newPost]);
  };

  return (
    <Paper elevation={24} className='shadow rounded' style={paperStyle}>
      <Typography className='centered-content-row' variant='h5' p={1} pb={0} height='3rem'>
        Create New Post
      </Typography>

      <Divider />

      <Box className='centered-content-column' p={2} gap={2}>
        <TextField
          multiline
          inputRef={descriptionRef}
          label='Description'
          helperText="What's on your mind?"
        />

        <TextField inputRef={imageRef} label='Image' helperText='Upload image URL' />

        <Box mt={2}>
          <Button onClick={handleAddPost} variant='outlined' color='success'>
            Add Post
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default AddPostForm;
