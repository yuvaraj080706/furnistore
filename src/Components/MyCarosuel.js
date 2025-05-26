import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

const items = [
  {
    title: "Modern Sofa",
    des: "This is the first slide",
    url: "https://d9dvmj2a7k2dc.cloudfront.net/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/m/cm6269tl.jpg",
  },
  {
    title: "Modern Sofa",
    des: "This is the second slide",
    url: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/guides-and-how-tos/choosing-living-room-furniture/Title-living-room-interior-design.jpg.transform/bh-tb-image-container/image.webp",
  },
  {
    title: "Modern Sofa",
    des: "This is the third slide",
    url: "https://obsessionoutlet.com/wp-content/uploads/Top-10-Trendy-Furniture-Design-in-2020.jpg",
  },
];

export const MyCarosuel = () => {
  return (
    <Box sx={{px:2}}>
      <Carousel
        autoPlay={true}
        indicators={false}
        navButtonsAlwaysVisible={true}
        animation="slide"
        duration={600}
      >
        {items.map((item, i) => (
          <SlideItem key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

function SlideItem({ item }) {
  return (
    <Paper sx={{ position: 'relative' }}>
      <img
        src={item.url}
        alt={item.title}
        style={{
          height: '480px',
          width: '100%',
          objectFit: 'cover'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.05)', 
          color: '#FFF',
          p: 2,
          fontWeight:"40px",
          textAlign: 'center',
        }}
      >
        <Typography variant="h3">{item.title}</Typography>
        <Typography>{item.des}</Typography>
      </Box>
    </Paper>
  );
}

