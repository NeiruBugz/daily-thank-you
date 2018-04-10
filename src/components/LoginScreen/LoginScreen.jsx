import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Title, Body, Button} from './styles'

export default class LoginScreen extends Component {

  render() {
    return (
      <Body>
       <Title>Daily Spasibo</Title>
       <Button href='/main'>Войти с помощью Google</Button>
      </Body>
    );
  }
}