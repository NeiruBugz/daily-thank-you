import axios from 'axios'

export const apiUrl = 'https://spasibo.dergunov.net:3000';

export const getToken = () =>
  localStorage.getItem('token');


export function getInfo() {
  return axios.get(apiUrl + '/users/token/' + getToken());
}

export function sendThank(name, text, token) {
  return axios.post(apiUrl + '/spasibo/' + token, {to: name, text: text});
}

export function getThank(token, from = 0, limit = 0) {
  return axios.get(apiUrl + '/spasibo/' + token, {params: {from: from, limit: limit}});
}

export function findUser(name) {
  return axios.get(apiUrl + '/users/find', {params: {name: name}});
}


