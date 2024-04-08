import React from "react";
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
  Select,
  MenuItem,
} from "@mui/material";

import { LineChart } from '@mui/x-charts/LineChart';

const data = [
    { time: '00:00', current: 2 },
    { time: '01:00', current: 3 },
    { time: '02:00', current: 4 },
    { time: '03:00', current: 5 },
    { time: '04:00', current: 6 },
    { time: '05:00', current: 7 },
    { time: '06:00', current: 8 },
    { time: '07:00', current: 9 },
    { time: '08:00', current: 10 },
    { time: '09:00', current: 11 },
    { time: '10:00', current: 12 },
    { time: '11:00', current: 13 },
    { time: '12:00', current: 14 },
    { time: '13:00', current: 15 },
    { time: '14:00', current: 16 },
    { time: '15:00', current: 17 },
    { time: '16:00', current: 18 },
    { time: '17:00', current: 19 },
    { time: '18:00', current: 20 },
    { time: '19:00', current: 21 },
    { time: '20:00', current: 22 },
    { time: '21:00', current: 23 },
    { time: '22:00', current: 24 },
    { time: '23:00', current: 25 },
  ];
  

const BatteryGraph = () => {
  return (
    <Container
      maxWidth="100%"
      sx={{ backgroundColor: "#1D1D1D", height: "100vh" }}
    >
      <Stack
        direction="row"
        sx={{
          width: "100%",
          height: "15%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ color: "#ffffff", marginTop: "20px" }}>
          Graph Visualization
        </Typography>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Time"
          sx={{
            color: "#ffffff", // Set text color to white
            "&:before": {
              borderColor: "#ffffff", // Set border color to white
            },
            "&:after": {
              borderColor: "#ffffff", // Set selected indicator color to white
            },
            borderRadius: "10px", // Set border radius to 10px
            border: "1px solid #ffffff", // Set border color to white
          }}
        >
          <MenuItem value={10}>Hour</MenuItem>
        </Select>
      </Stack>

      <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
      sx={{ backgroundColor: 'white' }}
    />

    </Container>
  );
};

export default BatteryGraph;
