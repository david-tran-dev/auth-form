import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@mui/material';
import SignupForm from '../SignupForm/SignupForm';

function LeftSide({ className, ...rest }) {
  return (
    <Grid
      item
      className="leftside className"
      {...rest}
      xs={12}
      sm={6}
    >
      <Container>
        <SignupForm />
      </Container>
    </Grid>
  );
}

LeftSide.propTypes = {
  className: PropTypes.string,
};
LeftSide.defaultProps = {
  className: '',
};
export default React.memo(LeftSide);
