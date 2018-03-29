import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import {MenuItem, Title, Wrapper} from './styles';



export class Header extends React.Component {

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Wrapper>
        <Title>Daily Спасибо</Title>
      </Wrapper>
    );
  }
}