import { AppBar, Container, Toolbar, Box, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Navbar() {
  
	const navStyle = (isActive) => {
		return {
			textDecoration: "none",
			color: isActive ? "red" : "white",
			fontWeight: "bold",
		};
	};

  return (
    <AppBar
      sx={{
        backgroundColor: 'rgb(51, 67, 86)',
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
				fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              GamerSpot
            </Box>
            <Stack gap={2} direction="row" justifyContent="space-between">
              <NavLink
                to="/"
                style={({ isActive }) => navStyle(isActive)}
              >
                Home
              </NavLink>
              <NavLink
                to="/games"
                style={({ isActive }) => navStyle(isActive)}
              >
                Video Games
              </NavLink>
              <NavLink
                to="/search"
				style={({ isActive }) => navStyle(isActive)}
              >
                Search Games
              </NavLink>
              {!cookies.get("token") ? (
                <>
                  <NavLink
                    to="/register"
					style={({ isActive }) => navStyle(isActive)}
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/login"
					style={({ isActive }) => navStyle(isActive)}
                  >
                    Login
                  </NavLink>
                </>
              ) : (
                <NavLink
                  to="/login"
				  style={({ isActive }) => navStyle(isActive)}
                  onClick={() => {
                    cookies.remove("token", { path: "/" });
                    window.location.href = window.location.href;
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
