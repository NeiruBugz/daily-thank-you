import React from 'react'
import { HeaderWrapper, HeaderTitle } from './styles';
import BMenu from '../BurgerMenu/index.js';


export default class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <BMenu/>
        <HeaderTitle>Daily Спасибо</HeaderTitle>
      </HeaderWrapper>
    );
  }
}