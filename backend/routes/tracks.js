const { spotifyApi } = require("../utils/spotify");
const express = require("express");

const router = express.Router();

router.get("/new-releases", (req, res, next) => {
  const fetchNewReleases = () => {
    spotifyApi
      .getNewReleases()
      .then((data) => {
        const newReleases = data.body.albums.items;
        res.json(newReleases);
      })
      .catch((err) => {
        console.error("Error fetching new releases:", err);
        if (req.retry) {
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

router.get("/get-recommendations", (req, res, next) => {
  const fetchRecommendations = () => {
    spotifyApi
      .getRecommendations({
        seed_artists: ["4NHQUGzhtTLFvgF5SZesLK"],
        min_energy: 0.4,
        min_popularity: 50,
      })
      .then((data) => {
        const recommendations = data.body.tracks;
        console.log("Fetched recommendations:", recommendations);
        res.json(recommendations);
      })
      .catch((err) => {
        console.error("Error fetching recommendations:", err);
        if (req.retry) {
          res
            .status(err.body.error.status)
            .json({ error: err.body.error.message });
        } else {
          next(err);
        }
      });
  };

  fetchRecommendations();
});

module.exports = router;
