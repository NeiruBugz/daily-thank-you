import React from 'react'
import { GoogleLogo, LoginButton, Main, Title } from './styles'
import google from '../../images/search.svg'
import { apiUrl, getToken } from '../../containers/Store';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    if (getToken()) {
      window.location.pathname = '/profile';
    }
  }

  render() {
    return (
      <Main>
        <Title>Daily Спасибо</Title>
        <LoginButton href={apiUrl + '/oauth'}>
          <GoogleLogo src={google} alt='Google'/>
          Войти с помощью Google
        </LoginButton>
      </Main>
    );
  }
}