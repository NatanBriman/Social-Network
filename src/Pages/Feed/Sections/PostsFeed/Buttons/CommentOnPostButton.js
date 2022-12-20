import { Comment } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const CommentOnPostButton = ({ post }) => {
  return (
    <IconButton color='success' variant='outlined'>
      <Comment />
    </IconButton>
  );
};

export default CommentOnPostButton;
