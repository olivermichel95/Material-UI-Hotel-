import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)({
  backgroundColor: '#87CEEB', 
  padding: '20px',
  textAlign: 'center',
//   position: 'fixed',
marginBottom: "0",
marginTop: "4rem",
  bottom: 0,
  width: '100%',
  animation: 'slideIn 2s ease-in-out',
  '@keyframes slideIn': {
    from: {
      opacity: 0,
      transform: 'translateY(100%)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
});

const FooterLink = styled(Link)({
  margin: '0 10px',
  color: '#ffffff',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body2" color="white">
        © {new Date().getFullYear()} Luxury Travel Expert. All rights reserved.
      </Typography>
      <Box>
        <FooterLink href="/about">About Us</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
