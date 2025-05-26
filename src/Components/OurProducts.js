import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Container } from '@mui/material';
import { useCart } from './CartContext';

const products = [
  {
    id: 1,
    title: 'Modern Armchair',
    desc: 'Comfortable and stylish',
    price: '$120.00',
    image: 'https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Aruba_Wing_Chair/WWCHRARBFRAB/WWCHRARBFRAB_LS_1.jpg?tr=w-1200?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Wooden Dining Table',
    desc: 'Seats up to 6 people',
    price: '$350.00',
    image: 'https://media-us.landmarkshops.in/cdn-cgi/image/h=750,w=750,q=85,fit=cover/homecentre/1000013430010-1000013430010-1701_01-2100.jpg?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Minimalist Bookshelf',
    desc: 'Perfect for organizing',
    price: '$90.00',
    image: 'https://media-us.landmarkshops.in/cdn-cgi/image/h=750,w=750,q=85,fit=cover/homecentre/1000013430010-1000013430010-1701_01-2100.jpg?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Comfort Sofa',
    desc: 'Spacious and soft',
    price: '$500.00',
    image: 'https://ii1.pepperfry.com/media/catalog/product/d/o/1600x800/dona-velvet-3-seater-sofa-in-dark-green-colour-dona-velvet-3-seater-sofa-in-dark-green-colour-9gexb2.jpg?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'Modern Armchair',
    desc: 'Comfortable and stylish',
    price: '$120.00',
    image: 'https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Aruba_Wing_Chair/WWCHRARBFRAB/WWCHRARBFRAB_LS_1.jpg?tr=w-1200?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: 'Wooden Dining Table',
    desc: 'Seats up to 6 people',
    price: '$350.00',
    image: 'https://media-us.landmarkshops.in/cdn-cgi/image/h=750,w=750,q=85,fit=cover/homecentre/1000013430010-1000013430010-1701_01-2100.jpg?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 7,
    title: 'Minimalist Bookshelf',
    desc: 'Perfect for organizing',
    price: '$90.00',
    image: 'https://media-us.landmarkshops.in/cdn-cgi/image/h=750,w=750,q=85,fit=cover/homecentre/1000013430010-1000013430010-1701_01-2100.jpg?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    title: 'Comfort Sofa',
    desc: 'Spacious and soft',
    price: '$500.00',
    image: 'https://ii1.pepperfry.com/media/catalog/product/d/o/1600x800/dona-velvet-3-seater-sofa-in-dark-green-colour-dona-velvet-3-seater-sofa-in-dark-green-colour-9gexb2.jpg?auto=format&fit=crop&w=600&q=80'
  },
];

const OurProducts = () => {
  const { addToCart } = useCart();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold', color: '#264653' }}>
        Our Products
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center" sx={{transition: 'transform 0.3s ease-in-out',
            '&:hover': { transform: 'scale(1.01)' },}}>
            <Card sx={{ width: '100%', maxWidth: 300, borderRadius: 3, boxShadow: 3 }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{
                  height: 200,
                  width: '100%',
                  objectFit: 'cover'
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#264653', fontWeight: 'bold' }}>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {product.desc}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#2A9D8F', fontWeight: 500 }}>
                  {product.price}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() =>addToCart(product)}
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
                  Add to cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurProducts;
