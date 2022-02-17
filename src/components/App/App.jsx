import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { requestSignup } from '../../requests/auth';

function App() {
  const handleUserSignup = async (emailValue, passwordValue) => {
    console.log(emailValue, passwordValue);
    const response = await requestSignup(emailValue, passwordValue);
    console.log('response:', response);
  };
  return (
    <div className="App">
      <Header />
      <Main onUserSignup={handleUserSignup} />
      <Footer />
    </div>
  );
}

export default React.memo(App);
