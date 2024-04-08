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
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import EmailIcon from "@mui/icons-material/Email";
import ImageIcon from "@mui/icons-material/Image";
import Battery from "./Battery";
import SolarPanel from "./SolarPanel";
import Home from "./Home";
import GridComponent from "./GridComponent";

const Analysis = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          TabIndicatorProps={{
            style: {
              color:"#ffffff",
              backgroundColor: "#ffffff", // Change this to the desired color for the indicator
            },
          }}
        >
          <Tab
            sx={{
              color: "#ffffff",
              fontSize: "1rem",
              textTransform: "none",
            }}
            label="Battery"
            value="1"
          />
          <Tab
            sx={{
              color: "#ffffff",
              fontSize: "1rem",
              textTransform: "none",
            }}
            label="Solar Panel"
            value="2"
          />
          <Tab
            sx={{
              color: "#ffffff",
              fontSize: "1rem",
              textTransform: "none",
            }}
            label="Home"
            value="3"
          />
          <Tab
            sx={{
              color: "#ffffff",
              fontSize: "1rem",
              textTransform: "none",
            }}
            label="Grid"
            value="4"
          />
        </TabList>
      </Box>
      <TabPanel value="1">
        <Box sx={{}}>
          <Battery />
        </Box>
      </TabPanel>
      <TabPanel value="2">
        <Box sx={{}}>
          <SolarPanel />
        </Box>
      </TabPanel>
      <TabPanel value="3">
        <Box sx={{}}>
          <Home />
        </Box>
      </TabPanel>
      <TabPanel value="4">
        <Box sx={{}}>
          <GridComponent />
        </Box>
      </TabPanel>
    </TabContext>
  );
};

export default Analysis;
