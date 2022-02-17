import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@mui/material';
import LeftSide from '../LeftSide.js/LeftSide';
import RightSide from '../RightSide/RightSide';

function Main({ className, ...rest }) {
  return (
    <main>
      <Container
        className="main className"
        {...rest}
      >
        <Grid container spacing={2} justifyContent="center">
          <LeftSide />
          <RightSide />
        </Grid>
      </Container>
    </main>
  );
}

Main.propTypes = {
  className: PropTypes.string,
};
Main.defaultProps = {
  className: '',
};
export default React.memo(Main);
