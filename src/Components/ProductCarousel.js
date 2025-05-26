import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from '@mui/material';

const items = [
  {
    title: 'Outdoor Lounge',
    image: 'https://www.ikea.com/in/en/images/products/naemmaroe-lounge-chair-outdoor-light-brown-stained__1185528_pe898427_s5.jpg',
  },
  {
    title: 'Outdoor Swivel Chairs',
    image: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202438/0003/manchester-outdoor-swivel-chair-m.jpg',
  },
  {
    title: 'Outdoor Dining Tables',
    image: 'https://m.media-amazon.com/images/I/718csbfjpHL._AC_UF894,1000_QL80_.jpg',
  },
  {
    title: 'Outdoor Dining Chairs',
    image: 'https://images-cdn.ubuy.co.in/6679242fbfe22058e30f42a9-suncrown-2-pieces-wrought-iron-black.jpg',
  },
  {
    title: 'Outdoor Dining Chairs',
    image: 'https://rnb.scene7.com/is/image/roomandboard/feb_25_05?size=900,900&scl=1',
  },
  {
    title: 'Outdoor Dining Chairs',
    image: 'https://rnb.scene7.com/is/image/roomandboard/feb_25_07?size=900,900&scl=1',
  },
  {
    title: 'Outdoor Dining Chairs',
    image: 'https://rnb.scene7.com/is/image/roomandboard/feb_25_06?size=900,900&scl=1',
  },
  {
    title: 'Outdoor Dining Chairs',
    image: 'https://rnb.scene7.com/is/image/roomandboard/feb_25_08?size=900,900&scl=1',
  },
];

const chunkArray = (arr, size) =>
  arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);

const ProductCarousel = () => {
  const groupedItems = chunkArray(items, 4); 

  return (
    <Box sx={{ py: 5, px:2 }}>
      <Typography variant="h3" align="center" mb={4} sx={{color:"#264653"}}>
        What We Love Right Now
      </Typography>
      <Carousel
        navButtonsAlwaysVisible
        indicators={false}
        animation="slide"
        autoPlay={true}
        indicatorIconButtonProps={{
          style: {
            padding: '6px',
            color: 'gray',
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: '#000',
          },
        }}
      >
        {groupedItems.map((group, index) => (
          <Grid container spacing={2} justifyContent="center" key={index}>
            {group.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card sx={{ borderRadius: 3 }}>
                  <CardMedia
                    component="img"
                    height="280"
                    image={item.image}
                    alt={item.title}
                    sx={{ borderRadius: 3 }}
                  />
                  <CardContent>
                    <Typography align="center">{item.title}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </Box>
  );
};

export default ProductCarousel;
