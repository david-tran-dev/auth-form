import React from 'react';
import PropTypes from 'prop-types';
import { Container, Link, Typography } from '@mui/material';

function Footer({ className, ...rest }) {
  return (
    <footer
      className={`footer ${className}`}
      {...rest}

    >
      <Container sx={{ position: 'fixed', bottom: '0' }}>
        <Typography variant="body2" color="text.secondary" align="center" mb={6}>
          {'Copyright © '}
          <Link color="inherit" href="#">
            JWT Authentication
          </Link>{' '}
          {new Date().getFullYear()}
          .
        </Typography>
      </Container>
    </footer>
  );
}

Footer.defaultProps = {
  className: '',
};
export default React.memo(Footer);
