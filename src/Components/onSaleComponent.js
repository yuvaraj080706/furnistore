import { Box, Typography, Card, CardMedia, CardContent, Grid, CardActions, Button, Snackbar, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useCart } from './CartContext';

const items = [
  {
    id: 1,
    title: 'Modern Gray Sofa',
    image: 'https://media-us.landmarkshops.in/cdn-cgi/image/h=750,w=750,q=85,fit=cover/homecentre/1000013430010-1000013430010-1701_01-2100.jpg',
    price: '$1,200',
    desc: 'A sleek modern gray sofa that complements any living room decor.',
  },
  {
    id: 2,
    title: 'Wooden Dining Table Set',
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
    price: '$850',
    desc: 'A classic wooden dining table set perfect for family gatherings.',
  },
  {
    id: 3,
    title: 'Leather Recliner Chair',
    image: 'https://www.daals.com/cdn/shop/files/BOSF-9680-TEAL-VEL-3ST_main.jpg?v=1722372888&width=2000',
    price: '$650',
    desc: 'Comfortable leather recliner chair for your relaxation needs.',
  },
  {
    id: 4,
    title: 'Glass Coffee Table',
    image: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg',
    price: '$300',
    desc: 'Elegant glass coffee table to enhance your living space.',
  },
  {
    id: 5,
    title: 'King Size Bed Frame',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    price: '$1,500',
    desc: 'Spacious king size bed frame with a modern design.',
  },
  {
    id: 6,
    title: 'Bookshelf with Storage',
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
    price: '$400',
    desc: 'Functional bookshelf with ample storage space.',
  },
  {
    id: 7,
    title: 'Outdoor Patio Set',
    image: 'https://www.nfm.com/dw/image/v2/BDFM_PRD/on/demandware.static/-/Sites-nfm-master-catalog/default/dw68e315c1/images/059/16/59168609-2.jpg?sh=1000&sm=fit&sw=1000',
    price: '$950',
    desc: 'Durable outdoor patio set for your backyard gatherings.',
  },
  {
    id: 8,
    title: 'Office Desk with Drawers',
    image: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg',
    price: '$600',
    desc: 'Spacious office desk with multiple drawers for organization.',
  },

];

const OnSaleComponent = () => {
  const { addToCart } = useCart();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleAddToCart = (item) => {
    addToCart(item);
    setSnackbarMessage(`${item.title} added to cart!`);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleBuyNow = (item) => {
    addToCart(item);

  };

  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h3" align="center" mb={4} sx={{ color: "#264653" }}>
        What We Love Right Now
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ 
              borderRadius: 3, 
              width: 280,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': { transform: 'scale(1.01)' }, 
            }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
                sx={{ borderRadius: '12px 12px 0 0' }}
              />
              <CardContent>
                <Typography align="center" variant="h6">{item.title}</Typography>
                <Typography variant="subtitle1" color="text.secondary" mt={1}>
                  {item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {item.desc}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2, gap: 1 }}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleBuyNow(item)}
                  sx={{
                    backgroundColor: '#264653',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#264653',
                      border: '2px solid #264653',
                      boxShadow: 'none',
                    },
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleAddToCart(item)}
                  sx={{
                    backgroundColor: '#264653',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#264653',
                      border: '2px solid #264653',
                      boxShadow: 'none',
                    },
                  }}
                >
                 🛒 Add
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" variant="filled">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default OnSaleComponent;