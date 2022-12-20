import { Box, Divider, Paper, TextField, Typography } from '@mui/material';

export const createFormInput = (
  value,
  onChange,
  label,
  helperText,
  required = false,
  fullWidth = false,
  multiline = false
) => {
  return { value, onChange, label, helperText, required, fullWidth, multiline };
};

const Form = ({ paperStyle, title, formInputs, children }) => {
  return (
    <Paper elevation={24} className='shadow rounded' style={paperStyle}>
      <Typography className='centered-content-row' variant='h5' p={1} pb={0} height='3rem'>
        {title}
      </Typography>

      <Divider />

      <Box className='centered-content-column' p={2} gap={2}>
        {formInputs.map((input) => (
          <TextField {...input} key={input.label} />
        ))}

        <Box mt={2}>{children}</Box>
      </Box>
    </Paper>
  );
};

export default Form;
