import axios from 'axios'

export const apiUrl = 'https://spasibo-spasibo.7e14.starter-us-west-2.openshiftapps.com';

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


