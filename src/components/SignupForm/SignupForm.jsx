import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function SignupForm({
  className, onUserSignup,
}) {
  const [emailValue, SetEmailValue] = useState('');
  const [passwordValue, SetPasswordValue] = useState('');

  const handleInputChange = (name, value) => {
    if (value === '') {
      return;
    }
    if (name === 'email') {
      SetEmailValue(value);
    }
    if (name === 'password') {
      SetPasswordValue(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onUserSignup(emailValue, passwordValue);
  };

  return (
    <>
      <CssBaseline />
      <Box
        className={`signup-form ${className}`}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign  Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={emailValue}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={passwordValue}
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="secondary"
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </>
  );
}

SignupForm.propTypes = {
  className: PropTypes.string,
  onUserSignup: PropTypes.func.isRequired,
};
SignupForm.defaultProps = {
  className: '',
};
export default React.memo(SignupForm);
