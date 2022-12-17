import { Box, Divider, Paper, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Feed = ({
  paperStyle,
  feedStyle,
  title,
  items,
  component,
  emptyText,
  isLoading,
  isVertical = true,
}) => {
  const isFeedEmpty = items.length === 0;

  return (
    <Paper elevation={24} className='shadow rounded' style={paperStyle}>
      <Typography className='centered-content' variant='h5' p={1} pb={0} height={58}>
        {title}
      </Typography>
      <Divider />

      {isLoading || isFeedEmpty ? (
        <Box my={3} className='centered-content' p={1}>
          <Typography textAlign='center' variant='h5'>
            {isLoading ? <CircularProgress color='inherit' /> : emptyText}
          </Typography>
        </Box>
      ) : (
        <Box
          p={2}
          pb={0}
          className='scroll'
          display='flex'
          flexDirection={isVertical ? 'column' : 'row'}
          style={feedStyle}
        >
          {items.map((item) => (
            <Box
              key={item.id}
              style={isVertical ? { marginBottom: '1em' } : { marginRight: '1em' }}
              className='max-width'
            >
              {component(item)}
            </Box>
          ))}
        </Box>
      )}
    </Paper>
  );
};

export default Feed;
