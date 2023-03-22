import React from 'react';
import LoginForm from './components/LoginForm';
import Navigation from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <LoginForm />
    </div>
  );
}

export default App;
