import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material';

const AddPostForm = ({
  handleAddPost,
  description,
  setDescription,
  image,
  setImage,
  paperStyle,
}) => {
  return (
    <Paper elevation={24} className='shadow rounded' style={paperStyle}>
      <Typography className='centered-content-row' variant='h5' p={1} pb={0} height='3rem'>
        Create New Post
      </Typography>

      <Divider />

      <Box className='centered-content-column' p={2} gap={2}>
        <TextField
          required
          fullWidth
          multiline
          label='Description'
          variant='outlined'
          value={description}
          helperText="What's on your mind?"
          onChange={({ target: { value } }) => setDescription(value)}
        />

        <TextField
          required
          fullWidth
          value={image}
          onChange={({ target: { value } }) => setImage(value)}
          label='Image'
          helperText='Upload image URL'
        />

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
