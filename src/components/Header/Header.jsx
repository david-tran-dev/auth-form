import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

function Header({ className, ...rest }) {
  return (
    <Container
      className={className}
      {...rest}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              JWT authentification Form
            </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Signup</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};
Header.defaultProps = {
  className: '',
};
export default React.memo(Header);
