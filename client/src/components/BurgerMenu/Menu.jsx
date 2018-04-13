import React from 'react';
import { Menu, MenuItem } from './styles';


export default ({ close }) => (
    <Menu>
      <MenuItem>Отправить</MenuItem>
      <MenuItem>Прочитать</MenuItem>
      <MenuItem>Профиль</MenuItem>
    </Menu>
);