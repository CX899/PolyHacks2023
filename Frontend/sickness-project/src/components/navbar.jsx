import { Box, IconButton, Typography } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useState, useEffect } from "react";



const Navbar = () => { 
  return (
    <Box backgroundColor="white" display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" alignItems="center">
        <Typography fontFamily="Poppins" fontWeight="600" fontSize="1.5rem" variant="h2">
          Sickness PolyHacks
        </Typography>
      </Box>
      <Box display="flex">
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;