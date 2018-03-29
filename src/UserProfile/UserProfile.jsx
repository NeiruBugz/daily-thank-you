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
            src='https://pp.userapi.com/c841128/v841128454/33784/DSCjS0RfwIo.jpg'
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