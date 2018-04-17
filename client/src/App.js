import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile'
import ReadThank from './components/ReadThank/ReadThank';
import SendThank from './components/SendThank/SendThank'
import Auth from './components/Auth/Auth';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={Login}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/readthank' component={ReadThank}/>
          <Route path='/send' component={SendThank}/>
          <Route path='/oauth/:token'component={Auth}/>
        </div>
      </Router>
    );
  }
}
