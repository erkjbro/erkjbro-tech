import { useEffect, useState } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

// Needs work to be configurable with props.
const SiteAlert = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTimeout(() => {
      handleOpen();
    }, 2000);
  }, []);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      autoHideDuration={6000}
      open={open}
      onClose={handleClose}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity="info"
      >
        <AlertTitle>Info</AlertTitle>
        {props.children}
      </Alert>
    </Snackbar>
  );
};

export default SiteAlert;
