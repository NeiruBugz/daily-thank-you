import React from 'react'
import {ReadWrapper} from './styles';
import Header from '../Header/Header';
import {getThank, getToken} from '../../containers/Store';
import {ThankItem} from "./ThankItem";

export default class ReadThank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thanks: []
    };
    this.getThankList();
  }

  getThankList() {
    getThank(getToken(), 0, 10)
      .then(res => {
        this.setState({
          thanks: res.data
        });
      })
  }

  thanksRender = () =>
    this.state.thanks.map((item, index) =>
      item.from ?
        <ThankItem key={index} read photo={item.from.photo} name={item.from.name} text={item.text}/>
        :
        <ThankItem key={index} photo={item.to.photo} name={item.to.name} text={item.text}/>
    );

  render() {
    return (
      <ReadWrapper>
        <Header/>
        {this.thanksRender()}
      </ReadWrapper>
    );
  }
}