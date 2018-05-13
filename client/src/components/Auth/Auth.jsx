import React from 'react';

export default class Auth extends React.Component {

  constructor(props) {
    super(props);
    const token = this.props.match.params.token;
    localStorage.setItem('token', token);
    window.location.pathname = '/profile';
  }

  render() {
    return ('Auth');
  }
}