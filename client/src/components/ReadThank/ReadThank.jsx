import React from 'react'
import { ReadWrapper} from './styles';
import Header from '../Header/Header';
import { ThankItem } from './ThankItem';


export default class ReadThank extends React.Component {
  render() {
    return (
      <ReadWrapper>
        <Header/>
        <ThankItem read/>
        <ThankItem/>
      </ReadWrapper>
    );
  }
}