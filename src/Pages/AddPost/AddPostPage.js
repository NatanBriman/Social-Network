import { Grid } from '@mui/material';
import AddPostForm from './Components/AddPostForm';

const AddPostPage = () => {
  return (
    <Grid my={2} className='centered-content-row'>
      <AddPostForm paperStyle={{ width: '40%' }} />
    </Grid>
  );
};

export default AddPostPage;
