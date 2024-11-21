import React from "react";
import {
  Modal,
  Box,
  Typography,
  Grid2 as Grid,
  ListItem,
  ListItemText,
  Checkbox,
  Button,
} from "@mui/material";

const MusicModal = ({
  open,
  handleClose,
  genres,
  selectedGenres,
  handleGenreToggle,
  handleSubmit,
}) => {
  const excludedGenres = [
    "afrobeat",
    "anime",
    "bluegrass",
    "brazil",
    "breakbeat",
    "british",
    "cantopop",
    "chicago-house",
    "children",
    "chill",
    "club",
    "comedy",
    "dancehall",
    "detroit-techno",
    "disney",
    "drum-and-bass",
    "dub",
    "forro",
    "french",
    "garage",
    "german",
    "gospel",
    "happy",
    "hardstyle",
    "holidays",
    "honky-tonk",
    "idm",
    "indian",
    "industrial",
    "iranian",
    "j-dance",
    "j-idol",
    "kids",
    "latin",
    "latino",
    "malay",
    "mandopop",
    "metal-misc",
    "minimal-techno",
    "mpb",
    "new-age",
    "new-release",
    "opera",
    "pagode",
    "party",
    "pop-film",
    "post-dubstep",
    "power-pop",
    "psych-rock",
    "rainy-day",
    "reggaeton",
    "rockabilly",
    "salsa",
    "samba",
    "sertanejo",
    "show-tunes",
    "singer-songwriter",
    "ska",
    "sleep",
    "songwriter",
    "spanish",
    "swedish",
    "tango",
    "techno",
    "trance",
    "trip-hop",
    "turkish",
  ];

  const filteredGenres = genres.filter(
    (genre) => !excludedGenres.includes(genre)
  );

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: 1100,
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 3,
          boxShadow: 24,
          margin: "auto",
          mt: 5,
          maxHeight: "80vh",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
          Select Genres
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {filteredGenres.map((genre) => (
            <Grid item xs={6} sm={4} md={3} key={genre}>
              <ListItem
                button
                onClick={() => handleGenreToggle(genre)}
                sx={{
                  p: 1,
                  borderRadius: 2,
                  transition: "background-color 0.2s",
                  "&:hover": { bgcolor: "action.hover" },
                }}>
                <Checkbox
                  checked={selectedGenres.indexOf(genre) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={genre} />
              </ListItem>
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            mt: 3,
            px: 4,
            alignSelf: "center",
          }}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default MusicModal;
