import axios from 'axios'

export const apiUrl = 'http://spasibo.dergunov.net:3000';

const getToken = () =>
  localStorage.getItem('token');


export function getInfo() {
  return axios.get(apiUrl + '/users/token/' + getToken());
}


