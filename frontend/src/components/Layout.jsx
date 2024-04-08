import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { Box, Stack, Typography, Container, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import "./layout.css";
import { useAuthContext } from "../hooks/useAuthContext";

const Layout = () => {
  const { user } = useAuthContext();

  return (
    <>
      <div className="layoutContaner">
        <div className="navbarContaner">
          <Stack
            direction="row"
            sx={{
              display: "flex",
              height: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
                height: "100%",
                width: "15%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="./logo.png"
                alt="Image"
                style={{ height: "80%", width: "auto" }}
              />
            </Link>
            {user ? (
              <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  height: "100%",
                  width: "15%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
                  {user && user.username} &nbsp;&nbsp;
                  <PersonIcon sx={{ fontSize: "40px" }} />
                </Typography>
              </Link>
            ) : (
              <Link
                to="/Login"
                style={{
                  textDecoration: "none",
                  height: "100%",
                  width: "15%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h5" sx={{ color: "#ffffff" }}>
                  Back to Login
                </Typography>
              </Link>
            )}
          </Stack>
        </div>
        <div className="outletContaner">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
