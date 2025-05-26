import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Divider,
  InputAdornment,
  IconButton,
  Alert,
  Snackbar,
  Paper
} from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const accentColor = "#264653";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedPassword = localStorage.getItem("rememberedPassword");

    if (storedEmail) {
      setEmail(storedEmail);
      setRememberMe(true);
    }

    if (storedPassword) {
      setPassword(storedPassword);
    }
    
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate('/');
    }
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setErrorMessage("Please enter both email and password");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    const usersData = localStorage.getItem("users");
    let users = [];
    
    if (usersData) {
      try {
        users = JSON.parse(usersData);
      } catch (error) {
        console.error("Error parsing users data:", error);
      }
    }

    const authenticatedUser = users.find(
      user => user.email === email && user.password === password
    );
    
    if (!authenticatedUser) {
      setErrorMessage("Invalid email or password");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email);
      localStorage.setItem("rememberedPassword", password);
    } else {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPassword");
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(authenticatedUser));

    const loginEvent = new Event("loginStatusChanged");
    window.dispatchEvent(loginEvent);

    setSnackbarSeverity("success");
    setOpenSnackbar(true);

    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ p: { xs: 3, md: 6 }, maxWidth: "1000px", mx: "auto", color: accentColor }}>
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbarSeverity} 
          sx={{ width: '100%' }}
        >
          {snackbarSeverity === "success" ? "Login successful! Redirecting..." : errorMessage}
        </Alert>
      </Snackbar>
      
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} sx={{ color: accentColor }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: accentColor }}>
              Welcome Back
            </Typography>
            <Typography variant="body1" gutterBottom>
              Please sign in with your account information.
            </Typography>

            <Box component="form" mt={3} onSubmit={handleSignIn}>
              <TextField
                fullWidth
                label="Email Address"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton 
                        edge="end"
                        onClick={togglePasswordVisibility}
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                <Link to="#" style={{ textDecoration: 'none', color: accentColor }}>
                  Forgot your password?
                </Link>
              </Box>

              <FormControlLabel
                control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                label="Remember me"
                sx={{ mt: 2 }}
              />

              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  bgcolor: accentColor,
                  "&:hover": { bgcolor: "#1b353f" }
                }}
                type="submit"
              >
                Sign In
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={0.5}>
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, height: "100%" }} />
          </Grid>

          <Grid item xs={12} md={5.5} sx={{ color: accentColor }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: accentColor }}>
              Create an Account
            </Typography>
            <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
              A FurniStore account lets you:
            </Typography>
            <List dense>
              {[
                "Check out faster",
                "Save to Favorites",
                "Track current and past orders",
                "Schedule delivery",
                "Make a payment"
              ].map((text, idx) => (
                <ListItem key={idx} disablePadding>
                  <ListItemText primary={`• ${text}`} />
                </ListItem>
              ))}
            </List>
            <Button
              variant="contained"
              component={Link}
              to="/CreateAccount"
              sx={{
                mt: 3,
                bgcolor: accentColor,
                "&:hover": { bgcolor: "#1b353f" }
              }}
            >
              Create an Account
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}