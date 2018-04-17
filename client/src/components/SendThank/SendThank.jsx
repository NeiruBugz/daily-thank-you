import React from 'react';
import Header from '../Header/Header';
import { Send, SendTitle, SendLabel, SendForm, SendInput, SendButton } from './styles';

export default class SendThank extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Send>
          <SendTitle>Отправить</SendTitle>
          <SendForm>
            <SendLabel>Кому:</SendLabel>
            <SendInput></SendInput>
            <SendLabel>За что: </SendLabel>
            <SendInput text></SendInput>
          </SendForm>
          <SendButton>Отправить</SendButton>
        </Send>
      </div>
    );
  }
}