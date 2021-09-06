import React from 'react';
import ReactDOM from 'react-dom';
import RaiseTicket from './RaiseTicket';
import Login from "./Employeelogin"
import Signin from "./signin"
import SigninEmp from './signinemp';
import Home from "./home"
import LoginAdmin from './Adminlogin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './home.css';
import ticket from "./ticket.png"


ReactDOM.render(
<div className="container pt-5">
  <Router >
    <div className="d-flex justify-content-center mt-5 mb-5">
      <h1>Raising Tickets</h1>
    </div>
    <div className="col-8 page_buttons mt-5">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/SignUpEmployee" component={Login} />
      <Route path="/SignUpAdmin" component={LoginAdmin} />
      <Route path="/SignInEmployee" component={SigninEmp} />
      <Route path="/SignInAdmin" component={Signin} />
    </Switch>
    </div>
  </Router>
  </div>,
  // <RaiseTicket />
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

