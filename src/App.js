import React from 'react';
import './App.css';
import Login from './components/login';
import { Route,Switch ,Redirect } from "react-router-dom";
import SignUp from './components/SignUp';

const App = () => {
  return (
    <div className='App'>
      <Switch>
          <Route path="/login" component={Login} />
          <Route path='/signup' component={SignUp} />
          <Redirect from="/" to="/login"/>
      </Switch>
    </div>
  );
};

export default App; 

