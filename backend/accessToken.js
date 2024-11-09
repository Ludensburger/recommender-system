const axios = require("axios");
const qs = require("qs");

const clientId = "47396995f42b4d33960a2be3d3561ffe";
const clientSecret = "19447a7ced5c4ff4b21b0debe055a65c";

const getToken = async () => {
  const tokenUrl = "https://accounts.spotify.com/api/token";
  const data = qs.stringify({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  });

  try {
    const response = await axios.post(tokenUrl, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log("Access Token:", response.data.access_token);
  } catch (error) {
    console.error("Error fetching access token:", error);
  }
};

getToken();
