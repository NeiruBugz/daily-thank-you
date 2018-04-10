import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Title, Body, Button} from './styles'

export default class LoginScreen extends Component {

  goToOauth = () => {
    window.location.href ='https://spasibo-spasibo.7e14.starter-us-west-2.openshiftapps.com/oauth/';
  };

  render() {
    return (
      <Body>
       <Title>Daily Spasibo</Title>
       <Button onClick={this.goToOauth}>Войти с помощью Google</Button>
      </Body>
    );
  }
}