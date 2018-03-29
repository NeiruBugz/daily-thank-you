import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Title, Body, Button} from './styles'

export default class LoginScreen extends Component {

  render() {
    return (
      <Body>
        <Title>Daily Спасибо</Title>
        <Link to='/main'>
          <Button primary>Войти с помощью Google</Button>
        </Link>
      </Body>
    );
  }
}