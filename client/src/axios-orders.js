import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-burger-cbf1b.firebaseio.com/'
})