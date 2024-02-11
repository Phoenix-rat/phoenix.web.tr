const config = require('../config.json');
async function makeApiRequest(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error making API request:', error);
    throw error;
  }
}

// Example usage
const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${config.lastfm_usrname}&api_key=${config.lastfm_apikey}&format=json&limit=1`;
const response = await makeApiRequest(apiUrl);

export default response;
