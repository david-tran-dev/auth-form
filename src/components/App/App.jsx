import './App.css';
import React from 'react';
import Header from '../Header/Header';
import InputForm from '../InputForm/InputForm';

function App() {
  return (
    <div className="App">
      <Header />
      <InputForm />
    </div>
  );
}

export default React.memo(App);
