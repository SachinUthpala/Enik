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
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import EmailIcon from "@mui/icons-material/Email";
import ImageIcon from "@mui/icons-material/Image";
import { Link } from 'react-router-dom';


const SetUp = () => {
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
       <img
            src="src/assets/logo.png"
            alt="Image"
            style={{  height: "80%", width: "auto" }}
          />
        <Typography variant="h5" sx={{ color: "#ffffff", marginTop: "20px" }}>
          Back to Login
        </Typography>
      </Stack> */}
      <Box sx={{ display: "flex", height: "85%" }}>
        <Stack
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "70%" }}>
            <Typography
              variant="h4"
              sx={{ color: "#ffffff", marginBottom: "20px" }}
            >
              Finish Setting Up Your Energy Wall
            </Typography>
          </Box>

          <Stack
            elevation={3}
            sx={{
              padding: 3,
              borderRadius: "50px",
              backgroundColor: "#999999",
              width: "70%",

              justifyContent: "space-evenly",
            }}
          >
            <Stack>
              <Typography
                variant="h5"
                sx={{ color: "#ffffff", marginTop: "20px" }}
              >
                1. Make sure Energy wall is properly installed and connected to
                your home WiFi network.
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#ffffff", marginTop: "20px" }}
              >
                2. Access your order information to obtain Inverter Serial
                Number.
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#ffffff", marginTop: "20px" }}
              >
                3. Insert Inverter Serial Number.
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#ffffff", marginTop: "20px" }}
              >
                4. Waiting to connect with server.
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#ffffff", marginTop: "20px" }}
              >
                5. Connection established
              </Typography>
            </Stack>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                size="large"
                type="submit"
                variant="contained"
                color="primary"
                component={Link}
              to="/dashboard"
                sx={{
                  marginY: 5,
                  marginX: 0,
                  backgroundColor: "#43C6AC",
                  width: "150px",
                  borderRadius: "20px",
                  color: "#000000",
                  fontSize: "1.2rem",
                  "&:hover": {
                    backgroundColor: "#0cc29d", // Change XXXXXX to the desired hover color
                  },
                }}
              >
                Done
              </Button>
            </Box>

            {/* Add your sign up buttons here */}
          </Stack>
        </Stack>
      </Box>
      {/* Content goes here */}
    </>
  );
};

export default SetUp;
