import React from 'react';
import {Header} from '../Header/Header';
import {UserPic, Wrapper} from './styles';

export default class UserProfile extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header/>
        <UserPic
          src='https://pp.userapi.com/c841128/v841128454/33784/DSCjS0RfwIo.jpg'
          alt='userImage'/>
      </Wrapper>
    );
  }
}