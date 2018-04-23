import axios from 'axios'

export const apiUrl = 'http://spasibo.dergunov.net:3000';

export const getToken = () =>
  localStorage.getItem('token');


export function getInfo() {
  return axios.get(apiUrl + '/users/token/' + getToken());
}

export function sendThank(name, text, token) {
  return axios.post(apiUrl + '/spasibo/' + token, {to: name, text: text});
} 


