import { AppBar, Container, Toolbar, Box, Stack } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <AppBar
      sx={{
        backgroundColor: 'darkgrey',
        backdropFilter: 'blur(20px)',
      }}
      position='sticky'>
      <Container>
        <Toolbar disableGutters>
          <Stack direction='row' justifyContent='space-between' width='50%'>
            <Box
              sx={{
                mr: 2,
                color: 'white',
                fontStyle: 'italic',
                fontSize: '22px',
              }}>
              GamerSpot
            </Box>
            <Stack gap={2} direction='row' justifyContent='space-between'>
              <NavLink
                to='/'
                style={({ isActive }) => {
                  return {
                    textDecoration: 'none',
                    color: isActive ? 'green' : 'white',
                  };
                }}>
                Home
              </NavLink>
              <NavLink
                to='/about'
                style={({ isActive }) => {
                  return {
                    textDecoration: 'none',
                    color: isActive ? 'green' : 'white',
                  };
                }}>
                About
              </NavLink>
              <NavLink
                to='/games'
                style={({ isActive }) => {
                  return {
                    textDecoration: 'none',
                    color: isActive ? 'green' : 'white',
                  };
                }}>
                Video Games
              </NavLink>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
