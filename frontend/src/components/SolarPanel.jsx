import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const SolarPanel = () => {
  return (
    <Box sx={{ display: "flex"}}>
      <Box sx={{ width: "40%", display: "flex", justifyContent: "center",alignItems:"center" }}>
        <img
          src="src/assets/solar.png"
          alt="Image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Box sx={{ width: "60%", display: "flex", justifyContent: "center", alignItems:"center" }}>
        <Stack direction="row" spacing={8}>
          <Stack spacing={4} sx={{ color: "#ffffff" }}>
            <Typography variant="h6">Photovalic Voltage </Typography>
            <Typography variant="h6">Photovalic Power </Typography>
            <Typography variant="h6">Photovalic Current</Typography>
            <Typography variant="h6">Photovalic Power Today</Typography>
            <Typography variant="h6">Photovalic Power Total</Typography>
            
          </Stack>
          <Stack spacing={4} sx={{ color: "#ffffff" }}>
            <Typography variant="h6">:</Typography>
            <Typography variant="h6">:</Typography>
            <Typography variant="h6">:</Typography>
            <Typography variant="h6">:</Typography>
            <Typography variant="h6">:</Typography>
          
          </Stack>
          <Stack spacing={4} sx={{ color: "#ffffff" }}>
            <Typography variant="h6">220V</Typography>
            <Typography variant="h6">50W</Typography>
            <Typography variant="h6">10A</Typography>
            <Typography variant="h6">10 kWh</Typography>
            <Typography variant="h6">30 kWh</Typography>
            
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default SolarPanel;
