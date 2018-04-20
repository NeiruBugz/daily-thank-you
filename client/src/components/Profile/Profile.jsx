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

import {getInfo} from '../../containers/Store'

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.getUserData();
  }
  state = {
    email: '',
    name: '',
    photo: ''
  }
  getUserData() {
    getInfo()
    .then(res => {
      this.setState({
        email: res.data.email,
        name: res.data.name,
        photo: res.data.photo
      })
    })
  }

  render() {
    return (
      <ProfileWrapper>
        <Header/>
        <UserInfo>
          <UserImage src={this.state.photo} alt='User image'/>
          <UserContent>
            <UserName>{this.state.name}</UserName>
            <UserEmail>{this.state.email}</UserEmail>
          </UserContent>
        </UserInfo>
      </ProfileWrapper>
    );
  }
}