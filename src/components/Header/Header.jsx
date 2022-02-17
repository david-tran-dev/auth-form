import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Button, Container, CssBaseline, Toolbar, Typography,
} from '@mui/material';

function Header({ className, ...rest }) {
  return (
    <>
      <CssBaseline />
      <Container
        className={className}
        {...rest}
      >
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }} align="center">
              JWT Authentication Form
            </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Signup</Button>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};
Header.defaultProps = {
  className: '',
};
export default React.memo(Header);
