import React from 'react';
import {Header} from '../Header/Header';
import {UserPic, Wrapper, Name, Mail, FlexInfo} from './styles';

export default class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Wrapper>
          <UserPic
            src='https://www.w3schools.com/howto/img_avatar.png'
            alt='userImage'/>
          <FlexInfo>
            <Name>Наиль</Name>
            <Mail>badiullin.nail@gmail.com</Mail>
          </FlexInfo>
        </Wrapper>
      </div>
    );
  }
}