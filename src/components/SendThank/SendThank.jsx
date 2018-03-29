import React from 'react';
import {Header} from '../Header/Header';
import {NameInput, Wrapper, MainInput, Button} from './styles';

export default class SendThank extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Wrapper>
          <NameInput placeholder='Введи имя получателя' type='text'/>
          <MainInput placeholder='Введи текст спасибки' type='text'/>
          <Button primary>Отправить</Button>
        </Wrapper>
      </div>
    )
  }
}