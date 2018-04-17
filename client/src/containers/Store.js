import axios from 'axios'

export const apiUrl = 'https://spasibo-spasibo.7e14.starter-us-west-2.openshiftapps.com';

const getToken = () =>
  localStorage.getItem('token');


export function getInfo() {
  return axios.get(apiUrl + '/users/token/' + getToken());
}


