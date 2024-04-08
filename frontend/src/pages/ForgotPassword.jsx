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

const ForgotPassword = () => {
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
                <Box sx={{width:"70%"}}>
                <Typography
                variant="h4"
                sx={{ color: "#ffffff", marginBottom: "20px" }}
              >
                Forgot Password
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
                  alignItems: "center",
                }}
              >
                
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                     
                      placeholder="Enter your email address" // Add placeholder
                      name="email"
                      type="email"
                      id="email"
                      
                      sx={{
                        width:"70%",
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
                       Send
                      </Button>
                   
    
                    {/* Add your sign up buttons here */}
                
               
                <Typography
                  variant="h5"
                  sx={{ color: "#ffffff", marginTop: "20px" }}
                >
                 * We will send you a message to set or reset your new password
                </Typography>
    
               
              </Stack>
            </Stack>
          </Box>
          {/* Content goes here */}
        </>
      );
}

export default ForgotPassword
