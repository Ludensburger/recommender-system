import "./App.css";
import { Box, Grid } from "@mui/system";
import {
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import MusicCard from "./components/MusicCard";
import MusicModal from "./components/MusicModal";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [newReleases, setNewReleases] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchNewReleases = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4001/api/tracks/new-releases"
        );
        setNewReleases(response.data);
      } catch (error) {
        console.error("Could not fetch new releases", error);
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4001/api/tracks/get-genres"
        );
        console.log("Genres fetched:", response.data); // Confirm data structure
        setGenres(response.data);
      } catch (error) {
        console.error(
          "Could not fetch genres:",
          error.response?.data || error.message
        );
      }
    };

    fetchNewReleases();
    fetchGenres();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleGenreToggle = (genre) => {
    const currentIndex = selectedGenres.indexOf(genre);
    const newSelectedGenres = [...selectedGenres];

    if (currentIndex === -1) {
      newSelectedGenres.push(genre);
    } else {
      newSelectedGenres.splice(currentIndex, 1);
    }

    setSelectedGenres(newSelectedGenres);
  };

  const handleSubmit = () => {
    console.log("Selected genres:", selectedGenres);
    handleCloseModal();
  };

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
            <Typography variant="h5" component="h2" className="!font-bold">
              Genres
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenModal}>
              Select Genres
            </Button>
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

      <MusicModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        genres={genres}
        selectedGenres={selectedGenres}
        handleGenreToggle={handleGenreToggle}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
