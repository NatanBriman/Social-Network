import { Box, Divider, Paper, Typography } from '@mui/material';

const Feed = ({ paperStyle, feedStyle, title, items, component }) => {
  const isItemsEmpty = items.length === 0;

  return (
    <Paper elevation={24} className='shadow rounded' style={paperStyle}>
      <Typography className='centered-content' variant='h5' p={1} pb={0} height={58}>
        {title}
      </Typography>
      <Divider />

      {isItemsEmpty ? (
        <Box mb={3} className='centered-content'>
          <Typography variant='h3'>Loading...</Typography>
        </Box>
      ) : (
        <Box
          p={2}
          pb={0}
          className='scroll'
          display='flex'
          flexDirection='column'
          style={feedStyle}
        >
          {items.map((item) => (
            <Box
              key={item.id instanceof Function ? item.id() : item.id}
              mb={3}
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
