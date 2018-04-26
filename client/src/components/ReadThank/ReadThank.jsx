import React from 'react'
import { ReadWrapper } from './styles';
import Header from '../Header/Header';
import { getThank, getToken } from '../../containers/Store';
import { ThankItem } from './ThankItem';

export default class ReadThank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thanks: [],
      id: null
    };
    this.getThankList();
  }

  getThankList() {
    getThank(getToken(), 0, 10)
      .then(res => {
        this.setState({
          thanks: res.data.spasibo,
          id: res.data.id
        });
      })
  }

  thanksRender = () =>
    this.state.thanks.map((item, index) =>
      item.to._id === this.state.id ?
        <ThankItem key={index} read photo={item.from.photo} name={item.from.name} to={item.to.name} text={item.text}/>
        :
        <ThankItem key={index} photo={item.from.photo} name={item.from.name} to={item.to.name} text={item.text}/>
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