import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Line } from "react-chartjs-2";

import revenueData from "../batteryCharge.json";

const Battery = () => {
  return (<>
    <Box>
         <Typography  variant="h6" sx={{color:"#ffffff", marginY:"30px"}}><span style={{color:"#12B347"}}>Charging</span> (45 minutes untill fully charge)</Typography>
    

    <Box sx={{ display: "flex"}}>
        

      <Box sx={{ width: "40%" ,display:"flex", justifyContent:'center'  }}>
        <img
          src="./battery.png"
          alt="Image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Box sx={{ width: "60%" ,display:"flex", justifyContent:'center' }}>
        <Stack direction="row" spacing={8}>
          <Stack  spacing={4} sx={{ color:"#ffffff"}}>
            <Typography  variant="h6">Type</Typography>
            <Typography  variant="h6">Capacity</Typography>
          <Typography  variant="h6">Batt Percentage</Typography>
          <Typography  variant="h6">Charg/Discharg Current</Typography>
          <Typography  variant="h6">Charg/Discharg Power</Typography>
          <Typography  variant="h6">Temperature</Typography>
          <Typography  variant="h6">Batt Charging Today</Typography>
          <Typography  variant="h6">Batt Charging Total</Typography>
          </Stack>
          <Stack  spacing={4} sx={{ color:"#ffffff"}}>
            <Typography  variant="h6">:</Typography>
            <Typography  variant="h6">:</Typography>
            <Typography  variant="h6">:</Typography>
            <Typography  variant="h6">:</Typography>
            <Typography  variant="h6">:</Typography>
            <Typography  variant="h6">:</Typography>
            <Typography  variant="h6">:</Typography>
            <Typography  variant="h6">:</Typography>
            
          </Stack>
          <Stack  spacing={4} sx={{ color:"#ffffff"}}>
            <Typography  variant="h6">LiFePo4Battery</Typography>
            <Typography  variant="h6">1000Ah</Typography>
          <Typography  variant="h6">100%</Typography>
          <Typography  variant="h6">16A</Typography>
          <Typography  variant="h6">32W</Typography>
          <Typography  variant="h6">42°c</Typography>
          <Typography  variant="h6">1 kWh</Typography>
          <Typography  variant="h6">1 kWh</Typography>
          </Stack>
          
        </Stack>
      </Box>
    </Box>
    
    </Box>
    <br /><br />

    <Stack bgcolor={"#fff"} padding={"40px"} color={"#000000"} textAlign={"center"} borderRadius={"10px"} height={"300px"}>
          <Typography variant="h6">Last 12 Hour Battery Percentage</Typography>
          <Line  color="#fff"  width={"900%"}
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "BATTERY PERSANTAGE %",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
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

export default Battery;
