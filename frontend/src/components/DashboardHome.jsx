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
import { Chart as ChartJS } from "chart.js/auto";
import {Bar, Line} from 'react-chartjs-2'

import revenueData from "../revenueData.json";


const DashboardHome = () => {
  return (
    <Stack spacing={2} sx={{ alignItems: "center", height: "100%" }}>
      <Box sx={{ height: "120px", display: "flex", alignItems: "center" }}>
        <img
          src="./weather.png"
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
          src="./house.png"
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
        <Typography variant="h6">Solar Power : 20 Kwh</Typography>
        <Typography variant="h6">Grid Power : 10 Kwh</Typography>
        <Typography variant="h6">Output Power : 40 Kwh</Typography>
      </Stack>

      <Stack
        direction="row"
        sx={{
          width: "100%",
          paddingY: "30px",
          justifyContent: "space-evenly",
          color: "#ffffff",
        }}
      >

        <Stack bgcolor={"#fff"} padding={"40px"} color={"#000000"} textAlign={"center"} borderRadius={"10px"}>
          <Typography variant="h6">Last 3 Hours Electricity Genaration</Typography>
          <br />
          <Bar height={"300px"} width={"600px"} color="#fff" 
          data={{
            labels : ['a' , 'b' , 'c'],
            datasets : [
              {
                label : "By Grid",
                data : [200 ,270, 500],
              },
              {
                label : "By Inverter",
                data : [300,250 , 120],
              },
              {
                label : "Total Output",
                data : [500,520 , 620 ],
              }
            ]
          }}
          
          /> 
  
        </Stack>

        <Stack bgcolor={"#fff"} padding={"40px"} color={"#000000"} textAlign={"center"} borderRadius={"10px"}>
          <Typography variant="h6">Last 12 Month Electricity Genaration</Typography>
          <br />
          <Line  height={"300px"} width={"600px"} color="#fff" 
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "BY INVERTOR",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "BY GRID",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
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


        

      </Stack>
    </Stack>
  );
};

export default DashboardHome;
