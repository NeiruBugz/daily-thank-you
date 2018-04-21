import React from 'react';
import { Menu, MenuItem } from './styles';


export default ({ close }) => (
    <Menu>
      <MenuItem href='/send'>Отправить</MenuItem>
      <MenuItem href='/read'>Прочитать</MenuItem>
      <MenuItem href='/profile'>Профиль</MenuItem>
    </Menu>
);