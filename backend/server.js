require("dotenv").config();

const express = require("express");
const cors = require("cors");
const trackRoutes = require("./routes/tracks");
const { refreshToken } = require("./utils/spotify");

const app = express();

app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  console.log("middleware is used here hehe");
  next();
});

app.use("/api/tracks", trackRoutes);

app.use(async (err, req, res, next) => {
  if (err && err.body && err.body.error) {
    if (
      err.body.error.status === 401 &&
      err.body.error.message === "The access token expired"
    ) {
      await refreshToken();
      // Retry the original request
      req.retry = true;
      next();
    } else {
      res.status(err.body.error.status).json({ error: err.body.error.message });
    }
  } else {
    res.status(500).json({ error: "Something went wrong!" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
