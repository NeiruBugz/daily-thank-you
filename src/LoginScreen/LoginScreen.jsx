import React, {Component} from 'react';

import {Title, Body, Button} from './styles'

export default class LoginScreen extends Component {
  render() {
    return (
      <Body>
        <Title>Daily Спасибо</Title>
        <Button primary>Войти с помощью Google</Button>
      </Body>
    );
  }
}