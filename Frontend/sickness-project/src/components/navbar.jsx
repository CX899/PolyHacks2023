import { Box, IconButton, Typography } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MedicationIconOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Navbar = () => { 
  return (
    <Box backgroundColor="white" display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" alignItems="center" backgroundColor="#8ED1B0" p="15px" borderRadius="20px" boxShadow={4} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="300">
        <Typography fontFamily="Poppins" fontWeight="600" fontSize="1.5rem" variant="h2" >
          SicknessHacks
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
          <MedicationIconOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;