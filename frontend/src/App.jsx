import "./App.css";
import { Box, Grid } from "@mui/system";
import {
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import MusicCard from "./components/MusicCard";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    const fetchNewReleases = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/tracks/new-releases"
        );
        setNewReleases(response.data.newReleases);
      } catch (error) {
        console.error("Could not fetch new releases", error);
      }
    };

    fetchNewReleases();
  }, []);

  console.log(newReleases);

  return (
    <>
      <Container>
        <Paper>
          <Box component="section" className="mb-10 mx-5">
            <Typography variant="h4" component="h1" className="!font-bold">
              Octave App by Ryuken
            </Typography>
          </Box>
          <Box component="section" className="my-5 mx-5">
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              className="w-full"
            />
          </Box>
          <Divider />
          <Box component="section" className="m-5 pb-5">
            <Grid container spacing={2} columns={2}>
              {newReleases.map((release) => (
                <Grid key={release.id} size={1}>
                  <MusicCard
                    title={release.name}
                    artist={release.artists[0].name}
                    image={release.images[0].url}
                    link={release.external_urls.spotify}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default App;
