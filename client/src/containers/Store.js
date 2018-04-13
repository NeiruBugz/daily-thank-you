import React from 'react'
import axios from 'axios'

export const apiUrl = 'https://spasibo-spasibo.7e14.starter-us-west-2.openshiftapps.com'



export const getInfo = () => {
  axios.get(apiUrl + '/users/5acd12e969d3910019597575')
    .then(res => res);
}
