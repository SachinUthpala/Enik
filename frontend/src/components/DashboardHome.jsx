import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  Tab,
} from "@mui/material";

const DashboardHome = () => {
  return (
    <Stack spacing={2} sx={{ alignItems: "center", height: "100%" }}>
      <Box sx={{ height: "120px", display: "flex", alignItems: "center" }}>
        <img
          src="src/assets/weather.png"
          alt="Image"
          style={{ width: "auto", height: "100%", marginRight: "20px" }}
        />
        <Stack sx={{ color: "#ffffff" }}>
          <Typography variant="h4">31°C</Typography>
          <Typography variant="h6">Location</Typography>
          <Typography variant="h6">Time</Typography>
        </Stack>
      </Box>
      <Box sx={{}}>
        <img
          src="src/assets/house.png"
          alt="Image"
          style={{ width: "auto", height: "100%" }}
        />
      </Box>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          paddingY: "30px",
          justifyContent: "space-evenly",
          color: "#ffffff",
        }}
      >
        <Typography variant="h6">Solar Power : --</Typography>
        <Typography variant="h6">Grid Power : --</Typography>
        <Typography variant="h6">Output Power : --</Typography>
      </Stack>
    </Stack>
  );
};

export default DashboardHome;
