import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CameraRoll from '@mui/icons-material/CameraRoll';
import { useNavigate } from "react-router-dom";

import { SECONDARY_BACKGROUND_COLOR, ACCENT_COLOR} from '../lib/Styles';

const yourPages = [
  { text: 'Cameras', href: '/cameras' },
  { text: 'Lenses', href: '/lenses' }
  ]




function NavBar() {

    let navigate = useNavigate(); 
    // TODO: This navigation is disgusting ha ha ha
  const handleClickNavMenu = (event) => {

    if (event.clientX < 255)
    {navigate('/cameras');}
    else {
        navigate('/lenses')
    }


  };




  return (
    <AppBar position="static" style={{backgroundColor: SECONDARY_BACKGROUND_COLOR}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CameraRoll sx={{ color: 'black', display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Analog
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

          </Box>
          <CameraRoll sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {yourPages.map((page) => (
              <Button
                key={page.text}
                onClick={handleClickNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>


          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;