import { Box, Divider, Paper, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useMemo } from 'react';

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
  const isFeedEmpty = useMemo(() => items.length === 0, [items]);

  return (
    <Paper elevation={24} className='shadow rounded' style={paperStyle}>
      <Typography className='centered-content-row' variant='h5' p={1} pb={0} height='3rem'>
        {title}
      </Typography>
      <Divider />

      {isLoading || isFeedEmpty ? (
        <Box my={3} className='centered-content-row' p={1}>
          <Typography textAlign='center' variant='h5'>
            {isLoading ? <CircularProgress color='inherit' /> : emptyText}
          </Typography>
        </Box>
      ) : (
        <Box
          p={2}
          className='scroll'
          display='flex'
          flexDirection={isVertical ? 'column' : 'row'}
          style={feedStyle}
        >
          {items.map((item) => (
            <Box
              key={item.id}
              style={isVertical ? { marginBottom: '1em' } : { marginRight: '1em', width: '13em' }}
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
