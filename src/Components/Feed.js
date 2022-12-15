import { Box, Divider, Paper, Typography } from '@mui/material';

const Feed = ({ paperStyle, feedStyle, title, items, component }) => {
  return (
    <Paper elevation={24} className='shadow rounded' style={paperStyle}>
      <Typography
        display='flex'
        justifyContent='center'
        alignItems='center'
        variant='h5'
        p={1}
        pb={0}
        height={58}
      >
        {title}
      </Typography>
      <Divider />
      {/* TODO: Make centered div class */}
      <Box
        p={2}
        pb={0}
        display='flex'
        flexDirection='column'
        alignItems='center'
        className='scroll'
        style={feedStyle}
      >
        {items.map((item) => (
          <Box key={item.id instanceof Function ? item.id() : item.id} mb={3} className='max-width'>
            {component(item)}
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default Feed;
