import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";

import revenueData from "../solarOut.json";

const SolarPanel = () => {
  return (
    <><Box sx={{ display: "flex"}}>
      <Box sx={{ width: "40%", display: "flex", justifyContent: "center",alignItems:"center" }}>
        <img
          src="./solar.png"
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
    <Stack bgcolor={"#fff"} padding={"40px"} color={"#000000"} textAlign={"center"} borderRadius={"10px"} height={"300px"}>
          <Typography variant="h6">Last 12 Hour Solar Output Percentage</Typography>
          <Line  color="#fff"  width={"900%"}
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "SOLAR OUTPUT PERSANTAGE %",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#58f714",
                borderColor: "#58f714",
              }
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
  
        </Stack>
    
    </>
  );
};

export default SolarPanel;
