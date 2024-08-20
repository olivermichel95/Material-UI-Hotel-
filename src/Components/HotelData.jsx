// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';

const hotelData = [
  {
    title: "Luxury Hotel",
    description: "Experience the ultimate luxury and comfort at our 5-star hotel, featuring exquisite dining, spa services, and stunning views.",
    image: "https://media.istockphoto.com/id/1487548682/photo/water-pond-near-the-entrance-to-dubai-mall-and-on-promenade-embankment-with-skyscrapers-in.jpg?s=1024x1024&w=is&k=20&c=lgtwcgXDgouISzcWqoGWpZ-R9pA2h5Q4vR1NlICJT-Q=",
    alt: "Luxury Hotel"
  },
  {
    title: "Beach Resort",
    description: "Relax and unwind at our beach resort with direct access to the pristine sandy beaches, crystal clear waters, and water sports.",
    image: "https://media.istockphoto.com/id/2075119610/photo/white-architecture-in-santorini-island-greece-two-chairs-on-the-terrace-with-sea-view.jpg?s=1024x1024&w=is&k=20&c=3clwstUtzaRDtDAEYgACoirWTs2PlWid9VAMv7-jrQE=",
    alt: "Beach Resort"
  },
  {
    title: "City Hotel",
    description: "Stay in the heart of the city with easy access to top attractions, shopping centers, and vibrant nightlife.",
    image: "https://media.istockphoto.com/id/535761281/photo/couple-relaxing-on-hotel-rooftop.jpg?s=1024x1024&w=is&k=20&c=J_oRz-eiBtk0wfdrdvEnL2Tn4OIXEHHBijx9ZYADC8I=",
    alt: "City Hotel"
  }
];

export default function MultiActionAreaCard() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 2 , mt: 4 }}>
      {hotelData.map((hotel, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={hotel.image}
              alt={hotel.alt}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hotel.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {hotel.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Book Now
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
