import React from 'react'
import Header from '../Header/Header'
import { ProfileWrapper, UserInfo, UserImage, UserName, UserEmail, UserContent } from './styles';


export default class Profile extends React.Component {

  render() {
    return (
      <ProfileWrapper>
        <Header/>
        <UserInfo>
          <UserImage src='https://www.w3schools.com/howto/img_avatar.png' alt='User image'/>
          <UserContent>
            <UserName>Имя пользователя</UserName>
            <UserEmail>Email пользователя</UserEmail>
          </UserContent>
        </UserInfo>
      </ProfileWrapper>
    );
  }
}