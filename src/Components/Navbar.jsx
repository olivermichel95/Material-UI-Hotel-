import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Image from './Image';
import MenuItem from '@mui/material/MenuItem';

import ConnectingAirportsRoundedIcon from '@mui/icons-material/ConnectingAirportsRounded';
const pages = ["Home", "Destinations", "About Us", "Contact Us"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: 'auto', 
          backgroundImage: 'url(https://example.com/your-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingBottom: '60px', 
        }}
      >
        <AppBar
          position="absolute"
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)', 
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <ConnectingAirportsRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#9e9e9e' }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: '#9e9e9e',
                  textDecoration: 'none',
                }}
              >
                The Luxury Travel Expert
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon sx={{ color: '#9e9e9e' }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" sx={{ color: '#9e9e9e' }}>{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: '#9e9e9e',
                  textDecoration: 'none',
                }}
              >
                Hotell
              </Typography>
              
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#9e9e9e', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1325299873/photo/blue-sky-over-the-sea.jpg?s=1024x1024&w=is&k=20&c=fB5WYm4uzipGaygPzdv-BScsEX-_i19JX2BNYnvLMgo=" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" sx={{ color: '#9e9e9e' }}>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      {<Image></Image>}

    </>
  );
}

export default ResponsiveAppBar;
