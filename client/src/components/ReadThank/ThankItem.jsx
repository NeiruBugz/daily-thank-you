import React from 'react';
import { AuthorImage, AuthorName, Thank, ThankContent, ThankHeader } from './styles';

//если уже реакткомпонент. то без конструктора можно
export class ThankItem extends React.Component {
  render() {
    return (
      <Thank read={this.props.read}>
        <ThankHeader>
          <AuthorImage src={this.props.photo}/>
          <AuthorName>{this.props.name}<br/>Кому: {this.props.to}</AuthorName>
        </ThankHeader>
        <ThankContent>
          {this.props.text}
        </ThankContent>
      </Thank>
    )
  }
};