import React from 'react'
import { GoogleLogo, LoginButton, Main, Title } from './styles'
import google from '../../images/search.svg'
import { apiUrl, getToken } from '../../containers/Store';


export default class Login extends React.Component {

  constructor(props) {
    super(props);
    const params = new URLSearchParams(window.location.search);
    this.token = params.get('token') || '';
    if (getToken()) {
      window.location.pathname = '/profile';
    }
  }

  render() {
    return (
      <Main>
        <Title>Daily Спасибо</Title>
        <LoginButton href={apiUrl + '/oauth?token=' + this.token}>
          <GoogleLogo src={google} alt='Google logo'/>
          Войти с помощью Google
        </LoginButton>
      </Main>
    );
  }
}