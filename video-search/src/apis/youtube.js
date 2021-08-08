import axios from 'axios';

const KEY = 'AIzaSyADN_KfeWVUrch4J27Yyh3lQlxEkpcdQIk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});