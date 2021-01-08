// CLIENT-SIDE APPS CANNOT SAFELY STORE SECRETS AS THEY ARE EMBEDDED INTO THE BUILD, SO ANYONE VIEWING OUR FILES (BUNDLED
// AND COMPILED, BUT STILL) IN THE CONSOLE WOULD BE ABLE TO COPY THEM.

// Only backend/server-side apps (like Node/Express) can store environment variables safely.
// Ideally, our frontend app would make a request to the server, which would then make the call with the env variable
// and send the response back to the frontend.
import axios from 'axios';
//const key = process.env.REACT_APP_APIKEY;
const key = 'AIzaSyC5Hvbt13T_XmQB_WaoFqqxdX72-v8qVc0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    key,
    type: 'video',
    maxResults: 5,
  },
});
