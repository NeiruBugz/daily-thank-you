import React from 'react'
import Header from '../Header/Header'
import {
  ProfileWrapper,
  UserInfo,
  UserImage,
  UserName,
  UserEmail,
  UserContent
} from './styles';

const Store = require('../../containers/Store');

export default class Profile extends React.Component {
  getUserData = () => {
    Store
      .getInfo()
      .then(user => {
        this.setState({user: user});
      })
  }

  render() {
    require('../../containers/Store');
    return (
      <ProfileWrapper>
        <Header/>
        <UserInfo>
          <UserImage src='' alt='User image'/>
          <UserContent>
            <UserName>''</UserName>
            <UserEmail>''</UserEmail>
          </UserContent>
        </UserInfo>
      </ProfileWrapper>
    );
  }
}