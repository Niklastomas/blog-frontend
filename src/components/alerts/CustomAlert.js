import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearMessages } from '../../redux/user/userSlice';

function SuccessAlert({ children, error }) {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearMessages());
    setShow(false);
  };

  return (
    <>
      {show && (
        <Alert
          style={{ margin: 10 }}
          severity={error ? 'error' : 'success'}
          onClose={handleClose}
        >
          {children}
        </Alert>
      )}
    </>
  );
}

export default SuccessAlert;
