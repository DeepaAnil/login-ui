import React from "react";
import { useState } from "react";
import './App.css';
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";


function App() {

  const [currentForm, setCurrentForm] = useState('login');

  function toggleFormHandler(formName) {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === 'login'
          ? <LoginPage onFormSwitch={toggleFormHandler} />
          : <RegisterPage onFormSwitch={toggleFormHandler} />
      }
    </div>
  );
}

export default App;
