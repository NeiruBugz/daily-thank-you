import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginScreen from './LoginScreen/LoginScreen';
import MainPage from './MainPage/MainPage';
import UserProfile from './UserProfile/UserProfile';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={LoginScreen}/>
          <Route path='/main' component={MainPage}/>
          <Route path='/profile' component={UserProfile}/>
        </div>
      </Router>
    );
  }
}
