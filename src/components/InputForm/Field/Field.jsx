import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

function Field({
  className, label, value, onChange, error,
}) {
  return (
    <TextField
      className={`field ${className}`}
      id="outlined-basic"
      label={label}
      variant="outlined"
      value={value}
      helperText=""
    />
  );
}

Field.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
};
Field.defaultProps = {
  className: '',
  value: '',
};
export default React.memo(Field);
