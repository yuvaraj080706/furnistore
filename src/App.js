import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import LoginPage from './LoginPage';
import CartPage from './Components/CartPage';
import PrivacyPolicy from './PrivacyPolicy';
import ReturnAndExchanges from './ReturnAndExchanges';
import TermsAndConditions from './TermsAndConditions';
import FAQs from './FAQs';
import { CartProvider } from './Components/CartContext';
import CreateAccount from './CreateAccount';
import OurProducts from './Components/OurProducts';
import ScrollToTop from './Components/ScrollToTop';

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#264653',
    },
    secondary: {
      main: '#2A9D8F',
    },
    error: {
      main: '#E76F51',
    },
    background: {
      default: '#F8F9FA',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Router>
          <ScrollToTop/>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/OurProducts" element={<OurProducts/>} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/ReturnAndExchanges" element={<ReturnAndExchanges />} />
            <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
            <Route path="/FAQS" element={<FAQs />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;