import axios from 'axios';

const KEY = 'AIzaSyDKfHHbJilBln6OK8Jog9A-z0XP5dtkQwM';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});