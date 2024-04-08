import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, Container, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from 'react-router-dom';
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";




const Profile = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();


  const handleLogout = () => {
    logout();
  };

  const [inverter, setInverter] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchInverter = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:4000/api/inverters/${user.userID}`); // Replace '/api/inverters/:id' with your actual backend endpoint
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch');
  //       }
  //       const data = await response.json();
  //       console.log(object)
  //       setInverter(data);
  //       setError(null); // Reset error state if previous request was successful
  //     } catch (error) {
  //       console.error("Error fetching inverter:", error);
  //       setError("Failed to fetch inverter data.");
  //       setInverter(null); // Reset inverter state in case of error
  //     }
  //   };

  //   // Call the fetchInverter function when the component mounts
  //   fetchInverter();
  // }, []); // Empty dependency array ensures useEffect runs only once when component mounts


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
      <Stack spacing={4}>
        <Box sx={{ height: "10%", display: "flex", justifyContent: "center" }}>
          <img
            src="src/assets/logo.png"
            alt="Image"
            style={{ width: "auto", height: "200px" }}
          />
        </Box>
        <Box sx={{ height: "90%", display: "flex", justifyContent: "center" }}>
          <Stack direction="row" spacing={8}>
            <Stack spacing={4} sx={{ color: "#ffffff" }}>
              <Typography variant="h6">Energy Wall ID</Typography>
              <Typography variant="h6">Username</Typography>
              <Typography variant="h6">Email</Typography>
              <Typography variant="h6">Contact No</Typography>
            </Stack>
            <Stack spacing={4} sx={{ color: "#ffffff" }}>
              <Typography variant="h6">:</Typography>
              <Typography variant="h6">:</Typography>
              <Typography variant="h6">:</Typography>
              <Typography variant="h6">:</Typography>
            </Stack>
            <Stack spacing={4} sx={{ color: "#ffffff" }}>
              <Typography variant="h6">123335846876666</Typography>
              <Typography variant="h6">John</Typography>
              <Typography variant="h6">john@gmail.com</Typography>
              <Typography variant="h6">+94 758964531</Typography>
            </Stack>
          </Stack>
        </Box>
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
            component={Link}
            to="/editprofile"
          >
            Change Personal Details
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            size="large"
            variant="outlined"
            sx={{
              marginY: 5,
              marginX: 0,

              width: "150px",
              borderRadius: "20px",
              color: "#43C6AC",
              fontSize: "1.2rem",
              "&:hover": {
                backgroundColor: "#ffffff", // Change XXXXXX to the desired hover color
              },
            }}
          >
            Reset
          </Button>
          <Button
            size="large"
            variant="outlined"
            onClick={handleLogout}
            sx={{
              marginY: 5,
              marginX: 0,

              width: "150px",
              borderRadius: "20px",
              color: "#43C6AC",
              fontSize: "1.2rem",
              "&:hover": {
                backgroundColor: "#ffffff", // Change XXXXXX to the desired hover color
              },
            }}
          >
            Log Out
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
