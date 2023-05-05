import React from 'react';
import './App.css';
import Login from './components/login';
import { Route,Routes ,Navigate } from "react-router-dom";
import SignUp from './components/SignUp';

const App = () => {
  return (
    <div className='App'>
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path="/" element={<Navigate to="/signup"/>}/>
      </Routes>
    </div>
  );
};

export default App; 
