import React, { useState, useEffect } from 'react';
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  createTheme,
  Divider,
  TextField,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  Badge
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingCart as ShoppingCartIcon,
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Search as SearchIcon,
  ExitToApp as LogoutIcon,
  Person as PersonIcon,
  Favorite as FavoriteIcon,
  ShoppingBag as OrdersIcon,
} from '@mui/icons-material';
import { ThemeProvider } from '@emotion/react';
import { useCart } from './CartContext';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '& input': { color: 'white' }, 
              },
            },
          }
    },
  },
  palette: {
    primary: { main: '#264653' }, 
    secondary: { main: '#FFFFFF' }, 
    highlight: { main: '#4CAF50' }, 
  },
})

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartMenuAnchorEl, setCartMenuAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const cartMenuOpen = Boolean(cartMenuAnchorEl);
  const navigate = useNavigate();
  const { cartItems, getTotalItems, removeFromCart } = useCart();

  // Check if user is logged in on component mount and on storage changes
  useEffect(() => {
    const checkUserLogin = () => {
      // First check for explicit login flag
      const loginStatus = localStorage.getItem('isLoggedIn');
      
      // Then check for user data
      const userData = localStorage.getItem('userData');
      const email = localStorage.getItem('email');
      
      if (loginStatus === 'true' || userData || email) {
        setIsLoggedIn(true);
        
        // Set user email in order of preference
        if (userData) {
          setUserEmail(JSON.parse(userData).email);
        } else if (email) {
          setUserEmail(email);
        }
      } else {
        setIsLoggedIn(false);
        setUserEmail('');
      }
    };

    // Initial check
    checkUserLogin();
    
    // Listen for storage events (from other tabs)
    window.addEventListener('storage', checkUserLogin);
    
    // Listen for custom login status change event
    window.addEventListener('loginStatusChanged', checkUserLogin);
    
    return () => {
      window.removeEventListener('storage', checkUserLogin);
      window.removeEventListener('loginStatusChanged', checkUserLogin);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCartMenuOpen = (event) => {
    setCartMenuAnchorEl(event.currentTarget);
  };

  const handleCartMenuClose = () => {
    setCartMenuAnchorEl(null);
  };

  const handleViewCart = () => {
    handleCartMenuClose();
    navigate('/cart');
  };

  const handleCheckout = () => {
    handleCartMenuClose();
    navigate('/checkout');
  };

  const handleLogout = () => {
    // Clear all user data
    localStorage.removeItem('userData');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('isLoggedIn');
    
    // Update state
    setIsLoggedIn(false);
    setUserEmail('');
    handleProfileMenuClose();

    const logoutEvent = new Event('loginStatusChanged');
    window.dispatchEvent(logoutEvent);

    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/LoginPage');
  };

  const getInitials = (email) => {
    return email ? email.charAt(0).toUpperCase() : 'U';
  };

  const formatPrice = (price) => {
    if (typeof price === 'string' && price.startsWith('$')) {
      return price;
    }
    return `$${price}`;
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250, backgroundColor: '#264653', color: 'white', height: '100%' }}>
      <Typography variant="h6" sx={{ my: 2 }} component={Link}>
        FurniStore
      </Typography>
      <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
      <List>
        {[
          { text: 'Home', path: '/' },
          { text: 'Contact Us', path: '/ContactUs' },
          { text: 'Privacy Policy', path: '/PrivacyPolicy' },
          { text: 'Return & Exchange', path: '/ReturnAndExchanges' },
          { text: 'Terms & Conditions', path: '/TermsAndConditions' },
          { text: 'FAQs', path: '/FAQs' },
          { text: 'About Us', path: '/AboutUs' },
          { text: 'Our Products', path: '/OurProducts' },
        ].map(({ text, path }) => (
          <ListItem key={text} disablePadding>
            <Button component={Link} to={path} color="inherit" fullWidth>
              <ListItemText primary={text} />
            </Button>
          </ListItem>
        ))}
        {!isLoggedIn && (
          <ListItem disablePadding>
            <Button 
              component={Link} 
              to="/LoginPage" 
              color="inherit" 
              fullWidth
              sx={{ fontWeight: 'bold', my: 1 }}
            >
              Login / Register
            </Button>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static" color="default" elevation={1} sx={{ backgroundColor: '#264653', color: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { md: 'none' } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ 
                flexGrow: 1, 
                fontWeight: 'bold',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              FurniStore
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
              <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center', color: 'white' }}>
                  <TextField label="Search..." variant='outlined' size="small" color="secondary" />
                  <SearchIcon />
                </Box>
              </ThemeProvider>

              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/OurProducts">Our Products</Button>
              <Button color="inherit" component={Link} to="/AboutUs">About Us</Button>
              <Button color="inherit" component={Link} to="/FAQs">FAQs</Button>
            </Box>

            <IconButton 
              color="inherit" 
              sx={{ ml: 1 }}
              onClick={handleCartMenuOpen}
              aria-controls={cartMenuOpen ? 'cart-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={cartMenuOpen ? 'true' : undefined}
            >
              <Badge badgeContent={getTotalItems()} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <Menu
              anchorEl={cartMenuAnchorEl}
              id="cart-menu"
              open={cartMenuOpen}
              onClose={handleCartMenuClose}
              onClick={handleCartMenuClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  width: 350,
                  maxHeight: 400,
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <Box sx={{ px: 2, py: 1, borderBottom: '1px solid #eee' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Shopping Cart ({getTotalItems()} items)
                </Typography>
              </Box>
              
              {cartItems.length === 0 ? (
                <Box sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="body2">Your cart is empty</Typography>
                </Box>
              ) : (
                <>
                  <Box sx={{ maxHeight: 250, overflow: 'auto' }}>
                    {cartItems.map((item) => (
                      <Box key={item.id} sx={{ p: 2, borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center' }}>
                        <Box 
                          component="img" 
                          src={item.image} 
                          alt={item.title} 
                          sx={{ width: 50, height: 50, mr: 2, objectFit: 'cover', borderRadius: 1 }}
                        />
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                            {item.title}
                          </Typography>
                          <Typography variant="caption" display="block">
                            {formatPrice(item.price)} × {item.quantity}
                          </Typography>
                        </Box>
                        <IconButton 
                          size="small" 
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFromCart(item.id);
                          }}
                        >
                          ×
                        </IconButton>
                      </Box>
                    ))}
                  </Box>
                  
                  <Box sx={{ p: 2, display: 'flex', gap: 1 }}>
                    <Button 
                      variant="outlined" 
                      fullWidth 
                      onClick={handleViewCart}
                      sx={{ 
                        borderColor: '#264653',
                        color: '#264653',
                        '&:hover': { borderColor: '#264653', backgroundColor: 'rgba(38, 70, 83, 0.1)' }
                      }}
                    >
                      View Cart
                    </Button>
                    <Button 
                      variant="contained" 
                      fullWidth 
                      onClick={handleCheckout}
                      sx={{ 
                        backgroundColor: '#264653',
                        '&:hover': { backgroundColor: '#1c343e' }
                      }}
                    >
                      Checkout
                    </Button>
                  </Box>
                </>
              )}
            </Menu>

            {isLoggedIn ? (
              <>
                <Tooltip title="Account settings">
                  <IconButton
                    color="inherit"
                    onClick={handleProfileMenuOpen}
                    size="small"
                    sx={{ ml: 1 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar 
                      sx={{ width: 32, height: 32, bgcolor: '#2A9D8F' }}
                    >
                      {getInitials(userEmail)}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleProfileMenuClose}
                  onClick={handleProfileMenuClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <Box sx={{ px: 2, py: 1, borderBottom: '1px solid #eee' }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {userEmail}
                    </Typography>
                  </Box>
                  <MenuItem component={Link} to="/profile">
                    <PersonIcon sx={{ mr: 1 }} /> My Profile
                  </MenuItem>
                  <MenuItem component={Link} to="/orders">
                    <OrdersIcon sx={{ mr: 1 }} /> My Orders
                  </MenuItem>
                  <MenuItem component={Link} to="/favorites">
                    <FavoriteIcon sx={{ mr: 1 }} /> Favorites
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>
                    <LogoutIcon sx={{ mr: 1 }} /> Sign Out
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button 
                color="inherit" 
                startIcon={<AccountCircleIcon />}
                onClick={handleLoginClick}
                sx={{ ml: 1 }}
              >
                Login
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;