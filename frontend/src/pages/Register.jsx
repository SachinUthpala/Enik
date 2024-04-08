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
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import EmailIcon from "@mui/icons-material/Email";
import ImageIcon from "@mui/icons-material/Image";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { useRegister } from "../hooks/useRegister";

const Register = () => {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  const { register, error, isLoading, emptyFields } = useRegister();

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Call register function
    await register(username, email, password, confirmPassword, number);
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
        <img
            src="./logo.png"
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
              Account Registration
            </Typography>
          </Box>
          <Stack
            direction="row"
            elevation={3}
            sx={{
              padding: 3,
              borderRadius: "50px",
              backgroundColor: "#999999",
              width: "70%",

              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "40%",
                backgroundColor: "#999999",
              }}
            >
              <form sx={{ width: "80%", marginTop: 1 }} onSubmit={handleRegister}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  placeholder="Username" // Add placeholder
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white", // Add white background
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  placeholder="Email" // Add placeholder
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white", // Add white background
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  placeholder="Password" // Add placeholder
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white", // Add white background
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  placeholder="Confirm Password" // Add placeholder
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white", // Add white background
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  placeholder="Contact Number" // Add placeholder
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white", // Add white background
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIphoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Stack
                  sx={{ alignItems: "center", marginY: "20px" }}
                  spacing={2}
                >
                  <Button
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
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
                    Register
                  </Button>
                </Stack>

                {/* Add your sign up buttons here */}
              </form>
            </Box>
            <Typography
              variant="h4"
              sx={{ color: "#ffffff", marginTop: "20px" }}
            >
              Or
            </Typography>

            <Stack sx={{ alignItems: "center", marginY: "20px" }} spacing={2}>
              <Typography variant="h5" sx={{ color: "#ffffff" }}>
                Sign in with
              </Typography>

              <Stack direction="row" spacing={2}>
                <IconButton
                  aria-label="google"
                  sx={{
                    color: "#ffffff",
                    backgroundColor: "#262626",
                    "&:hover": {
                      backgroundColor: "#000000", // Change XXXXXX to the desired hover color
                    },
                  }}
                  size="large"
                >
                  <GoogleIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  aria-label="apple"
                  sx={{
                    color: "#ffffff",
                    backgroundColor: "#262626",
                    "&:hover": {
                      backgroundColor: "#000000", // Change XXXXXX to the desired hover color
                    },
                  }}
                  size="large"
                >
                  <AppleIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  aria-label="email"
                  sx={{
                    color: "#ffffff",
                    backgroundColor: "#262626",
                    "&:hover": {
                      backgroundColor: "#000000", // Change XXXXXX to the desired hover color
                    },
                  }}
                  size="large"
                >
                  <EmailIcon fontSize="inherit" />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      {/* Content goes here */}
    </>
  );
};

export default Register;
