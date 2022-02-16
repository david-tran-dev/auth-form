import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Field from './Field/Field';

function InputForm({
  className, ...rest
}) {
  return (
    <Box
      className={`inputform ${className}`}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Field {...rest} />
    </Box>

  );
}

InputForm.propTypes = {
  className: PropTypes.string,
};
InputForm.defaultProps = {
  className: '',
};
export default React.memo(InputForm);
