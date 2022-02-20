import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, TextField } from '@mui/material';
import SignupForm from '../SignupForm/SignupForm';

function Main({
  className, onUserSignup, emailError, passwordError, ...rest
}) {
  return (
    <main>
      <Container
        className="main className"
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            className="leftside className"
            {...rest}
            xs={12}
            sm={6}
          >
            <Container>
              <SignupForm
                onUserSignup={onUserSignup}
                emailError={emailError}
                passwordError={passwordError}
                {...rest}
              />
            </Container>
          </Grid>
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
                display: 'flex', justifyContent: 'center', alignItems: 'center',
              }}
            >
              <Grid item>
                <TextField
                  id="outlined-multiline-static"
                  label="Server Response"
                  multiline
                  rows={20}
                  defaultValue="Default Value"
                  color="secondary"
                  disabled
                  sm={12}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-multiline-static"
                  label="Cookies"
                  multiline
                  rows={20}
                  defaultValue="Default Value"
                  color="secondary"
                  sm={12}
                  disabled
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

Main.propTypes = {
  className: PropTypes.string,
  onUserSignup: PropTypes.func.isRequired,
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
};
Main.defaultProps = {
  className: '',
  emailError: '',
  passwordError: '',
};
export default React.memo(Main);
