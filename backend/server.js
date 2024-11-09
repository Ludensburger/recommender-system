const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: "47396995f42b4d33960a2be3d3561ffe",
  clientSecret: "19447a7ced5c4ff4b21b0debe055a65c",
});

spotifyApi.setAccessToken(
  "BQBsGqbeKmll7ULchOzPxqvgwWaU65qjt-1HCDmk9oP-jad9Knn7L90VoSwdgzv6OIOIG1Eq8BsSUdtZeXR7n-ZJmr04iD3NMt-V8nlbq1uEVk0BblQ"
);

// Get a playlist
spotifyApi.getTrack("7ne2hzW4jaU5tacaCI4kJH").then(
  function (data) {
    console.log("Some information about this track", data.body.album.images);
  },
  function (err) {
    console.log("Something went wrong!", err);
  }
);
