import React, { useState } from "react";
import { Link } from "react-router-dom";

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
import DashboardHome from "../components/DashboardHome";
import Analysis from "../components/Analysis";

const Dashboard = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <Stack
        direction="row"
        sx={{
          width: "100%",
          height: "15%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/dashboard"
          style={{ textDecoration: "none", height: "80%", width: "auto" }}
        >
          <img
            src="src/assets/logo.png"
            alt="Image"
            style={{ height: "80%", width: "auto" }}
          />
        </Link>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Typography
            variant="h5"
            sx={{
              color: "#ffffff",
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            Jone <PersonIcon />
          </Typography>
        </Link>
      </Stack> */}
      <Box sx={{ height: "85%" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "flex-end",
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
                label="Dashboard"
                value="1"
              />
              <Tab
                sx={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  textTransform: "none",
                }}
                label="Analysis"
                value="2"
              />
              <Tab
                sx={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  textTransform: "none",
                }}
                label="Support"
                value="3"
              />
              <Tab
                sx={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  textTransform: "none",
                }}
                label="About"
                value="4"
              />
              <Tab
                sx={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  textTransform: "none",
                }}
                label="Configuration"
                value="5"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box sx={{}}>
              <DashboardHome />
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box sx={{}}>
              <Analysis />
            </Box>
          </TabPanel>
          <TabPanel value="3">
            {" "}
            <Typography variant="h4" sx={{ color: "#ffffff" }}>
              Support
            </Typography>
          </TabPanel>
          <TabPanel value="4">
            {" "}
            <Typography variant="h4" sx={{ color: "#ffffff" }}>
              About
            </Typography>
          </TabPanel>
          <TabPanel value="5">
            {" "}
            <Typography variant="h4" sx={{ color: "#ffffff" }}>
              Configuration
            </Typography>
          </TabPanel>
        </TabContext>
      </Box>
      {/* Content goes here */}
    </>
  );
};

export default Dashboard;
