const { spotifyApi } = require("../utils/spotify");
const express = require("express");

const router = express.Router();

router.get("/new-releases", (req, res, next) => {
  const fetchNewReleases = () => {
    spotifyApi
      .getNewReleases()
      .then((data) => {
        const newReleases = data.body;
        res.json(newReleases);
      })
      .catch((err) => {
        if (req.retry) {
          // If the request was retried and still failed, send the error response
          res
            .status(err.body.error.status)
            .json({ error: err.body.error.message });
        } else {
          next(err);
        }
      });
  };

  fetchNewReleases();
});

module.exports = router;
