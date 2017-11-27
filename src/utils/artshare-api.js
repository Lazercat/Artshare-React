
import axios from 'axios';

axios.defaults.baseURL = 'https://artshare-api.herokuapp.com/';
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;   // FUTURE
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


const artShareApi = axios.create({
  baseURL: 'https://artshare-api.herokuapp.com/',
  timeout: 2500,
});

export { artShareApi };
