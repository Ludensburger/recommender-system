import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function MusicCard({ title, artist, image, link }) {
  return (
    <Card
      sx={{ display: "flex", justifyContent: "space-between", height: "100%" }}>
      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "70%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="h5"
            sx={{
              textAlign: "left",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}>
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary", textAlign: "left" }}>
            {artist}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton
            aria-label="play/pause"
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{
          width: "30%",
          objectFit: "cover",
        }}
        image={image}
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default MusicCard;
