import React from "react";
import { Box, Typography, Grid, Avatar, Paper } from "@mui/material";

const Testimonials = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        TESTIMONIALS
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={8} md={4}>
          <Paper
            elevation={3}
            sx={{ p: 3, position: "relative", textAlign: "center" }}
          >
            <Typography variant="body1" sx={{ mt: 2 }}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </Typography>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                src="https://kudratikahumbo.com/wp-content/uploads/2019/11/testimonial-avatar-female-2-ux-builder-element.jpg"
                sx={{ width: 50, height: 50, mr: 2 }}
              />
              <Box>
                <Typography variant="h6">John Doe</Typography>
                <Typography variant="body2" color="textSecondary">
                  Creative Director
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={8} md={4}>
          <Paper
            elevation={3}
            sx={{ p: 3, position: "relative", textAlign: "center" }}
          >
            <Typography variant="body1" sx={{ mt: 2 }}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </Typography>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                src="https://olison.co.uk/wp-content/uploads/2018/02/testimonial-avatar-1-300x267.jpg"
                sx={{ width: 50, height: 50, mr: 2 }}
              />
              <Box>
                <Typography variant="h6">Jane Smith</Typography>
                <Typography variant="body2" color="textSecondary">
                  Marketing Lead
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={8} md={4}>
          <Paper
            elevation={3}
            sx={{ p: 3, position: "relative", textAlign: "center" }}
          >
            <Typography variant="body1" sx={{ mt: 2 }}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </Typography>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                sx={{ width: 50, height: 50, mr: 2 }}
              />
              <Box>
                <Typography variant="h6">Emily Johnson</Typography>
                <Typography variant="body2" color="textSecondary">
                  Product Manager
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonials;
