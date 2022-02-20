import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { requestSignup } from '../../requests/auth';

function App() {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUserSignup = async (emailValue, passwordValue) => {
    const response = await requestSignup(emailValue, passwordValue);
    console.log('response:', response.data);
    if (response.data.errors) {
      setEmailError(response.data.errors.email);
      setPasswordError(response.data.errors.password);
    }
  };
  return (
    <div className="App">
      <Header />
      <Main
        onUserSignup={handleUserSignup}
        emailError={emailError}
        passwordError={passwordError}
      />
      <Footer />
    </div>
  );
}

export default React.memo(App);
