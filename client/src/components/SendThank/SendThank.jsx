import React from 'react';
import {
  Send,
  SendButton,
  SendForm,
  SendHint,
  SendHintImage,
  SendHints,
  SendInput,
  SendLabel,
  SendName,
  SendNameChange,
  SendTitle
} from './styles';
import { findUser, getToken, sendThank } from '../../containers/Store';
import Header from '../Header/Header';

export default class SendThank extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      photo: null,
      content: '',
      hints: [],
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    sendThank(this.state.id, this.state.content, getToken()).then(() => {
      window.location.pathname = '/read';
    });
  };

  handleNameChange = (e) => {
    const name = e.target.value;
    // если имя не пустое. ищем по имени
    if (name) {
      findUser(name)
        .then(res => {
          this.setState({hints: res.data});
        });
    }
  };

  handleFocus = () => {
    this.setState({hints: []});
  };

  handleTextChange = (e) => {
    this.setState({content: e.target.value});
  };

  // по клику на всплывающее имя ставит его айдишник
  // и чистит подсказки
  setUser = e => {
    this.setState({
      id: e.target.getAttribute('data-id'),
      hints: [],
      photo: e.target.getAttribute('data-photo'),
      name: e.target.getAttribute('data-name')
    });
  };

  removeUser = () => {
    this.setState({
      id: null,
      hints: [],
      photo: null,
      name: ''
    });
  };

  // генерим всплывающие подсказки (имена)
  renderHints = () =>
    this.state.hints.map((item, index) => <SendHint key={index}
                                                    data-id={item._id} data-name={item.name} data-photo={item.photo}
                                                    onClick={this.setUser}><SendHintImage src={item.photo}/>{item.name}
    </SendHint>);

  renderName = () =>
    //проверка на айдишник (задан/незадан)
    !!this.state.id ?
      <SendName active>
        <SendHintImage active src={this.state.photo}/>
        <span>{this.state.name}</span>
        <SendNameChange onClick={this.removeUser}>Сменить</SendNameChange>
      </SendName>
      :
      <SendName>
        <SendLabel>Кому:</SendLabel>
        <SendInput onChange={this.handleNameChange} placeholder='Начните вводить имя'/>
        <SendHints>{this.renderHints()}</SendHints>
      </SendName>;


  render() {
    return (
      <div>
        <Header/>
        <Send>
          <SendTitle>Отправить</SendTitle>
          <SendForm onSubmit={this.handleSubmit}>
            {this.renderName()}
            <SendLabel text>За что:</SendLabel>
            <SendInput text onFocus={this.handleFocus} onChange={this.handleTextChange}
                       placeholder='За что хотите поблагодарить?'/>
            <SendButton>Отправить</SendButton>
          </SendForm>
        </Send>
      </div>
    );
  }
}