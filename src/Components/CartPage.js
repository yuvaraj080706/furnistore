import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Button, 
  IconButton, 
  Divider,
  TextField,
  CardMedia,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { 
  Add as AddIcon, 
  Remove as RemoveIcon, 
  Delete as DeleteIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import { useCart } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getSubtotal } = useCart();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const formatPrice = (price) => {
    if (typeof price === 'string' && price.startsWith('$')) {
      return parseFloat(price.substring(1)).toFixed(2);
    }
    return price.toFixed(2);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={handleContinueShopping}
          sx={{ mr: 2, color: '#264653' }}
          component={Link} to='/OurProducts'
        >
          Continue Shopping
        </Button>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#264653' }}>
          Shopping Cart
        </Typography>
      </Box>

      {cartItems.length === 0 ? (
        <Paper elevation={0} sx={{ p: 4, textAlign: 'center', borderRadius: 2, mb: 4, border: '1px solid #eee' }}>
          <Typography variant="h6" gutterBottom>Your cart is empty</Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Looks like you haven't added any items to your cart yet.
          </Typography>
          <Button 
            variant="contained" 
            onClick={handleContinueShopping}
            sx={{ 
              mt: 2, 
              backgroundColor: '#264653',
              '&:hover': { backgroundColor: '#1c343e' }
            }}
            component={Link} to='/OurProducts'
          >
            Start Shopping
          </Button>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, borderRadius: 2, border: '1px solid #eee' }}>
              {!isMobile && (
                <Grid container sx={{ py: 1.5, borderBottom: '1px solid #eee', color: 'text.secondary' }}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">Product</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle2">Price</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle2">Quantity</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ textAlign: 'right' }}>
                    <Typography variant="subtitle2">Total</Typography>
                  </Grid>
                </Grid>
              )}

              {cartItems.map((item) => (
                <Box key={item.id} sx={{ py: 3, borderBottom: '1px solid #eee' }}>
                  {isMobile ? (
                    <Box>
                      <Box sx={{ display: 'flex' }}>
                        <CardMedia
                          component="img"
                          image={item.image}
                          alt={item.title}
                          sx={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 1, mr: 2 }}
                        />
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                            {item.title}
                          </Typography>
                          <Typography color="text.secondary" variant="body2" sx={{ mb: 1 }}>
                            {item.desc}
                          </Typography>
                          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                            ${formatPrice(item.price)}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <IconButton 
                            size="small" 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <RemoveIcon fontSize="small" />
                          </IconButton>
                          <TextField
                            size="small"
                            value={item.quantity}
                            onChange={(e) => {
                              const value = parseInt(e.target.value);
                              if (!isNaN(value)) {
                                handleQuantityChange(item.id, value);
                              }
                            }}
                            inputProps={{
                              min: 1,
                              style: { textAlign: 'center', width: '40px' }
                            }}
                            variant="outlined"
                            sx={{ mx: 1 }}
                          />
                          <IconButton 
                            size="small" 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mr: 1 }}>
                            ${(formatPrice(item.price) * item.quantity).toFixed(2)}
                          </Typography>
                          <IconButton 
                            size="small" 
                            color="error" 
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                  ) : (
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CardMedia
                            component="img"
                            image={item.image}
                            alt={item.title}
                            sx={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 1, mr: 2 }}
                          />
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                              {item.title}
                            </Typography>
                            <Typography color="text.secondary" variant="body2">
                              {item.desc}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      
                      <Grid item xs={2} sx={{ textAlign: 'center' }}>
                        <Typography>${formatPrice(item.price)}</Typography>
                      </Grid>
                      
                      <Grid item xs={2} sx={{ textAlign: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <IconButton 
                            size="small" 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <RemoveIcon fontSize="small" />
                          </IconButton>
                          <TextField
                            size="small"
                            value={item.quantity}
                            onChange={(e) => {
                              const value = parseInt(e.target.value);
                              if (!isNaN(value)) {
                                handleQuantityChange(item.id, value);
                              }
                            }}
                            inputProps={{
                              min: 1,
                              style: { textAlign: 'center', width: '40px' }
                            }}
                            variant="outlined"
                            sx={{ mx: 1 }}
                          />
                          <IconButton 
                            size="small" 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Grid>
                      
                      <Grid item xs={2} sx={{ textAlign: 'right' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                          <Typography sx={{ fontWeight: 'bold', mr: 1 }}>
                            ${(formatPrice(item.price) * item.quantity).toFixed(2)}
                          </Typography>
                          <IconButton 
                            size="small" 
                            color="error" 
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </Grid>
                    </Grid>
                  )}
                </Box>
              ))}

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Button 
                  variant="outlined" 
                  onClick={handleContinueShopping}
                  sx={{ 
                    borderColor: '#264653', 
                    color: '#264653',
                    '&:hover': { borderColor: '#264653', backgroundColor: 'rgba(38, 70, 83, 0.1)' } 
                  }}
                >
                  Continue Shopping
                </Button>
                
                <Button 
                  variant="outlined" 
                  color="error" 
                  onClick={clearCart}
                  startIcon={<DeleteIcon />}
                >
                  Clear Cart
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: 2, border: '1px solid #eee', position: 'sticky', top: 16 }}>
              <Typography variant="h6" gutterBottom sx={{ pb: 2, borderBottom: '1px solid #eee' }}>
                Order Summary
              </Typography>

              <Box sx={{ py: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography color="text.secondary">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</Typography>
                  <Typography>${getSubtotal().toFixed(2)}</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography color="text.secondary">Shipping</Typography>
                  <Typography>Free</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography color="text.secondary">Tax</Typography>
                  <Typography>${(getSubtotal() * 0.07).toFixed(2)}</Typography>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Total</Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    ${(getSubtotal() + (getSubtotal() * 0.07)).toFixed(2)}
                  </Typography>
                </Box>
              </Box>

              <Button 
                variant="contained" 
                fullWidth 
                size="large"
                onClick={handleCheckout}
                sx={{ 
                  mt: 2, 
                  backgroundColor: '#264653',
                  '&:hover': { backgroundColor: '#1c343e' }
                }}
                component={Link}
                to='/'
              >
                Proceed to Checkout
              </Button>
              
              <Box sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  placeholder="Enter coupon code"
                  size="small"
                  sx={{ mb: 1 }}
                />
                <Button
                  variant="outlined" 
                  fullWidth
                  sx={{ 
                    borderColor: '#264653', 
                    color: '#264653',
                    '&:hover': { borderColor: '#264653', backgroundColor: 'rgba(38, 70, 83, 0.1)' } 
                  }}
                >
                  Apply Coupon
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default CartPage;