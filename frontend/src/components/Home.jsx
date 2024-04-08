import React from 'react'
import { Box, Stack, Typography } from "@mui/material";


const Home = () => {
    return (

        <Box sx={{ display: "flex"}}>
            
    
          <Box sx={{ width: "40%" ,display:"flex", justifyContent:'center',alignItems:"center"  }}>
            <img
              src="./home.png"
              alt="Image"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
          <Box sx={{ width: "60%" ,display:"flex", justifyContent:'center',alignItems:"center" }}>
            <Stack direction="row" spacing={8}>
              <Stack  spacing={4} sx={{ color:"#ffffff"}}>
                
              <Typography  variant="h6">Output Voltage  </Typography>
              <Typography  variant="h6">Output Power    </Typography>
              <Typography  variant="h6">Output Current    </Typography>
              <Typography  variant="h6">Load Percentage</Typography>
              <Typography  variant="h6">Load Consumption Today  </Typography>
              <Typography  variant="h6">Load Consumption Total    </Typography>
                
              </Stack>
              <Stack  spacing={4} sx={{ color:"#ffffff"}}>
                <Typography  variant="h6">:</Typography>
                <Typography  variant="h6">:</Typography>
                <Typography  variant="h6">:</Typography>
                <Typography  variant="h6">:</Typography>
                <Typography  variant="h6">:</Typography>
               
                
              </Stack>
              <Stack  spacing={4} sx={{ color:"#ffffff"}}>
              <Typography variant="h6">220V</Typography>
            <Typography variant="h6">50W</Typography>
            <Typography variant="h6">10A</Typography>
            <Typography variant="h6">30%</Typography>
            <Typography variant="h6">10 kWh</Typography>
            <Typography variant="h6">30 kWh</Typography>
              </Stack>
              
            </Stack>
          </Box>
        </Box>
    );
}

export default Home
