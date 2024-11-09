import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box } from "@mui/system";
import { Container } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <Box>
          <h1 className="text-3xl font-bold underline">TOBOL</h1>
        </Box>
      </Container>
    </>
  );
}

export default App;
