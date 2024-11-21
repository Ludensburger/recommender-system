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

// getAvailableGenreSeeds

router.get("/get-genres", (req, res, next) => {
  const fetchGenres = () => {
    spotifyApi
      .getAvailableGenreSeeds()
      .then((data) => {
        const genres = data.body.genres;
        res.json(genres);
      })
      .catch((err) => {
        console.error("Error fetching genres:", err);
        if (req.retry) {
          res
            .status(err.body.error.status)
            .json({ error: err.body.error.message });
        } else {
          next(err);
        }
      });
  };

  fetchGenres();
});

// getArtist
router.get("/get-artist/:id", (req, res, next) => {
  const fetchArtist = () => {
    spotifyApi
      .getArtist(req.params.id)
      .then((data) => {
        const artist = data.body;
        res.json(artist);
      })
      .catch((err) => {
        console.error("Error fetching artist:", err);
        if (req.retry) {
          res
            .status(err.body.error.status)
            .json({ error: err.body.error.message });
        } else {
          next(err);
        }
      });
  };

  fetchArtist();
});

module.exports = router;
