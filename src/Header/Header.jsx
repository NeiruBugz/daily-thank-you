import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import {MenuItem, Title, Wrapper} from './styles';


const menuStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '26px',
    height: '20px',
    left: '26px',
    top: '1.3rem'
  },
  bmBurgerBars: {
    background: '#373a47',
    borderRadius: '10px'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    overflow: 'hidden'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItems: {
    textDecoration: 'none',
    color: 'white'
  }
};

export class Header extends React.Component {

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Wrapper>
        <Menu styles={menuStyles} left>
          <MenuItem id='read' href='/main'>Ваши спасибо</MenuItem>
          <MenuItem id='send' href='/send'>Отправить спасибо</MenuItem>
          <MenuItem id='user' href='/profile'>Профиль</MenuItem>
        </Menu>
        <Title>Daily Спасибо</Title>
      </Wrapper>
    );
  }
}