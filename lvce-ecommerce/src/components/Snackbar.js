import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const AlertAdd = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <AlertAdd onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </AlertAdd>
      </Snackbar>
      <AlertAdd severity="error">This is an error message!</AlertAdd>
      <AlertAdd severity="warning">This is a warning message!</AlertAdd>
      <AlertAdd severity="info">This is an information message!</AlertAdd>
      <AlertAdd severity="success">This is a success message!</AlertAdd>
    </Stack>
  );
}