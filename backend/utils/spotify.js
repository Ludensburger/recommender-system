require("dotenv").config();

const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN);

async function refreshToken() {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body["access_token"]);
    console.log("The access token has been refreshed!");
  } catch (error) {
    console.error("Could not refresh access token", error);
  }
}

module.exports = {
  spotifyApi,
  refreshToken,
};
