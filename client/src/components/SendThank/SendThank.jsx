import React from 'react';
import Header from '../Header/Header';
import {
  Send,
  SendTitle,
  SendLabel,
  SendForm,
  SendInput,
  SendButton
} from './styles';
import {sendThank, getToken} from '../../containers/Store';

export default class SendThank extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      person: '',
      content: ''
    };

    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    sendThank(this.state.person, this.state.content, getToken());
  };

  handleNameChange = (e) => {
    this.setState({person: e.target.value});
  };

  handleTextChange = (e) => {
    this.setState({content: e.target.value});
  };

  render() {
    return (
      <div>
        <Header/>
        <Send>
          <SendTitle>Отправить</SendTitle>
          <SendForm onSubmit={this.handleSubmit}>
            <SendLabel>Кому:</SendLabel>
            <SendInput name='person' onChange={this.handleNameChange}></SendInput>
            <SendLabel>За что:
            </SendLabel>
            <SendInput name='content' text onChange={this.handleTextChange}></SendInput>
            <SendButton>Отправить</SendButton>
          </SendForm>

        </Send>
      </div>
    );
  }
}