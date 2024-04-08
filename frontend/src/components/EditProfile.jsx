import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Stack,
  Typography,
  Container,
  Button,
  TextField,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
const EditProfile = () => {
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
      <Typography variant="h4" sx={{ color: "#ffffff" }}>
        Change Personal Details
      </Typography>
      <Stack
        spacing={4}
        sx={{ height:"100%",display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <TextField
          variant="outlined"
          margin="normal"
          required
          placeholder="Username" // Add placeholder
          name="Username"
          type="text"
          id="Username"
         
          sx={{
            width: "40%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "white", // Add white background
            },
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          placeholder="Email" // Add placeholder
          name="Email"
          type="email"
          id="Email"
         
          sx={{
            width: "40%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "white", // Add white background
            },
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          placeholder="Contact Number" // Add placeholder
          name="ContactNumber"
          type="number"
          id="ContactNumber"
         
          sx={{
            width: "40%",
            "& .MuiOutlinedInput-root": {
                backgroundColor: "white", // Add white background
              },
          }}
        />

        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button
            size="large"
            variant="outlined"
            sx={{
              marginY: 5,
              marginX: 0,

              borderRadius: "20px",
              color: "#43C6AC",
              fontSize: "1.2rem",
              "&:hover": {
                backgroundColor: "#ffffff", // Change XXXXXX to the desired hover color
              },
            }}
          >
            Save
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default EditProfile;
