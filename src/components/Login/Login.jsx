import React from 'react'
import {Main, Title, LoginButton, GoogleLogo} from './styles'
import google from '../../images/search.svg'
import { apiUrl } from '../../containers/Store';


export default class Login extends React.Component {
  render() {
    return (
      <Main>
        <Title>Daily Спасибо</Title>
        <LoginButton href={apiUrl + '/oauth'}>
          <GoogleLogo src={google} alt='Google logo'/>
          Войти с помощью Google
        </LoginButton>
      </Main>
    );
  }
}