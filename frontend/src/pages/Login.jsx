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
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(username));

    await login(username, password);
  };

  return (
    <>
      {/* <Box sx={{ width: "100%", height: "15%" }}>
      <img
            src="src/assets/logo.png"
            alt="Image"
            style={{  height: "80%", width: "auto" }}
          />
      </Box> */}
      <Box sx={{ display: "flex", height: "85%" }}>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              borderRadius: "50px",
              backgroundColor: "#999999",
              width: "70%",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#ffffff", marginTop: "20px" }}
            >
              System
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "#ffffff", marginBottom: "20px" }}
            >
              Monitoring Portal
            </Typography>
            <form sx={{ width: "80%", marginTop: 1 }} onSubmit={handleLogin}>
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
                placeholder="Password" // Add placeholder
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
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
                    Register an account
                  </Typography>
                </Link>
                <Link to="/forgotpassword" style={{ textDecoration: "none" }}>
                  <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
                    Forgot Password
                  </Typography>
                </Link>
              </Stack>
              <Stack sx={{ alignItems: "center", marginY: "20px" }} spacing={2}>
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
                  Login
                </Button>
                <Typography variant="h5" sx={{ color: "#ffffff" }}>
                  or
                </Typography>
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

              {/* Add your sign up buttons here */}
            </form>
          </Paper>
        </Box>
        <Box
          sx={{
            width: "60%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="./loginImage.png"
            alt="Image"
            style={{ width: "100%", maxHeight: "100%" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Login;
