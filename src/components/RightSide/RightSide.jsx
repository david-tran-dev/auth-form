import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, TextField,
} from '@mui/material';

function RightSide({ className, ...rest }) {
  return (
    <Grid
      item
      className={`rightside ${className}`}
      {...rest}
      xs={12}
      sm={6}
      mt={4}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        }}
      >
        <Grid item>
          <TextField
            id="outlined-multiline-static"
            label="Server Response"
            multiline
            rows={10}
            defaultValue="Default Value"
            color="secondary"
            sm={12}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-multiline-static"
            label="Cookies"
            multiline
            rows={5}
            defaultValue="Default Value"
            color="secondary"
            sm={12}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

RightSide.propTypes = {
  className: PropTypes.string,
};
RightSide.defaultProps = {
  className: '',
};
export default React.memo(RightSide);
