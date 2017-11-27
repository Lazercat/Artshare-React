
import axios from 'axios';
require('dotenv').config();

axios.defaults.baseURL = process.env.AXIOS_ARTSHARE_API_BASEURL;
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;   // FUTURE
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


const instance = axios.create({
  baseURL: process.env.AXIOS_ARTSHARE_API_BASEURL,
  timeout: 2500,
});

export { instance };
