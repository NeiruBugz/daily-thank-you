import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginScreen from './components/LoginScreen/LoginScreen';
import MainPage from './components/MainPage/MainPage';
import UserProfile from './components/UserProfile/UserProfile';
import SendThank from './components/SendThank/SendThank';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={LoginScreen}/>
          <Route path='/main' component={MainPage}/>
          <Route path='/send' component={SendThank}/>
          <Route path='/profile' component={UserProfile}/>
        </div>
      </Router>
    );
  }
}
