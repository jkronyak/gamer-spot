import { AppBar, Container, Toolbar, Box, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Navbar() {
  return (
    <AppBar
      sx={{
        backgroundColor: "darkgrey",
        backdropFilter: "blur(20px)",
      }}
      position="sticky"
    >
      <Container>
        <Toolbar disableGutters>
          <Stack direction="row" justifyContent="space-between" width="50%">
            <Box
              sx={{
                mr: 2,
                color: "white",
                fontStyle: "italic",
                fontSize: "22px",
              }}
            >
              GamerSpot
            </Box>
            <Stack gap={2} direction="row" justifyContent="space-between">
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    textDecoration: "none",
                    color: isActive ? "green" : "white",
                  };
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                style={({ isActive }) => {
                  return {
                    textDecoration: "none",
                    color: isActive ? "green" : "white",
                  };
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/games"
                style={({ isActive }) => {
                  return {
                    textDecoration: "none",
                    color: isActive ? "green" : "white",
                  };
                }}
              >
                Video Games
              </NavLink>
              <NavLink
                to="/search"
                style={({ isActive }) => {
                  return {
                    textDecoration: "none",
                    color: isActive ? "green" : "white",
                  };
                }}
              >
                Search Games
              </NavLink>
              {!cookies.get("token") ? (
                <>
                  <NavLink
                    to="/register"
                    style={({ isActive }) => {
                      return {
                        textDecoration: "none",
                        color: isActive ? "green" : "white",
                      };
                    }}
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/login"
                    style={({ isActive }) => {
                      return {
                        textDecoration: "none",
                        color: isActive ? "green" : "white",
                      };
                    }}
                  >
                    Login
                  </NavLink>
                </>
              ) : (
                <NavLink
                  to="/logout"
                  style={({ isActive }) => {
                    return {
                      textDecoration: "none",
                      color: isActive ? "green" : "white",
                    };
                  }}
                  onClick={() => {
                    cookies.remove("token");
                    window.location.href = "/login";
                  }}
                >
                  Logout
                </NavLink>
              )}
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
