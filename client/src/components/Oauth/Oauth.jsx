import React from 'react';

export default class Oauth extends React.Component {
  constructor(props) {
    super(props);
    const token = this.props.match.params.token;
  }

  saveToken(params) {
    const token = this.props.match.params.token;
    localStorage.setItem('token', token);
  }

  render() {
    return('Oauth');
  }
}