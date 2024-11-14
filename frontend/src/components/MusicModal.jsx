import React from "react";
import {
  Modal,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const MusicModal = ({ open, handleClose, playlist }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: 400,
          bgcolor: "background.paper",
          p: 4,
          margin: "auto",
          mt: 5,
        }}>
        <Typography variant="h6" component="h2">
          {playlist?.name}
        </Typography>
        <List>
          {playlist?.tracks?.items?.map((track, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={track.track.name}
                secondary={track.track.artists
                  .map((artist) => artist.name)
                  .join(", ")}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default MusicModal;
