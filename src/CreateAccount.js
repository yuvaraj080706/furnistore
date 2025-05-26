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
  ListItemIcon,
  ListItemText,
  Divider,
  InputAdornment,
  IconButton,
  Alert,
  Snackbar,
  Paper
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const accentColor = "#264653";

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    postalCode: "",
    isSubscribed: false,
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate('/');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.postalCode) {
      newErrors.postalCode = "Postal code is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSnackbarMessage("Please correct the errors in the form");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }
    
    let users = [];
    const existingUsers = localStorage.getItem("users");
    
    if (existingUsers) {
      try {
        users = JSON.parse(existingUsers);
      } catch (error) {
        console.error("Error parsing users data:", error);
      }
    }

    const emailExists = users.some(user => user.email === formData.email);
    
    if (emailExists) {
      setSnackbarMessage("An account with this email already exists");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    const newUser = { ...formData };
    delete newUser.confirmPassword;
    
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    localStorage.setItem("isLoggedIn", "true");
    
    if (formData.isSubscribed) {
      localStorage.setItem("rememberedEmail", formData.email);
      localStorage.setItem("rememberedPassword", formData.password);
    }
    
    const loginEvent = new Event("loginStatusChanged");
    window.dispatchEvent(loginEvent);

    setSnackbarMessage("Account created successfully! Redirecting to homepage...");
    setSnackbarSeverity("success");
    setOpenSnackbar(true);

    setTimeout(() => {
      navigate('/');
    }, 1500);
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
          {snackbarMessage}
        </Alert>
      </Snackbar>
      
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: accentColor }}>
              Create an Account
            </Typography>
            <Typography variant="body1" gutterBottom>
              All information is required
            </Typography>

            <Box component="form" noValidate autoComplete="off" mt={3} onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email Address"
                placeholder="You will use this to sign into your account"
                margin="normal"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                required
              />
              <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Your password must be at least 6 characters"
                margin="normal"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
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
              <TextField
                fullWidth
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                margin="normal"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                required
              />
              <TextField
                fullWidth
                label="Postal Code"
                margin="normal"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                error={!!errors.postalCode}
                helperText={errors.postalCode}
                required
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="isSubscribed"
                    checked={formData.isSubscribed}
                    onChange={handleChange}
                  />
                }
                label={
                  <Typography variant="body2">
                    Please send me email updates about products and special events. We will not share,
                    sell, or trade your email.{" "}
                    <Link to="/PrivacyPolicy" style={{ color: accentColor }}>Privacy Policy</Link>
                  </Typography>
                }
                sx={{ alignItems: "flex-start", mt: 1 }}
              />
              <Typography variant="body2" mt={2}>
                By creating an account, you agree to FurniStore's{" "}
                <Link to="/TermsAndConditions" style={{ color: accentColor }}>Terms of Use</Link>.
              </Typography>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  bgcolor: accentColor,
                  "&:hover": { bgcolor: "#1b353f" },
                  px: 4
                }}
              >
                Create Account
              </Button>
              <Typography variant="body2" mt={2}>
                Already have an account?{" "}
                <Link to="/LoginPage" style={{ color: accentColor }}>Sign In</Link>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={0.5}>
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, height: "100%" }} />
          </Grid>

          <Grid item xs={12} md={5.5}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: accentColor }}>
              A FurniStore account lets you:
            </Typography>
            <List>
              {[
                "Check out faster",
                "Save to Favorites",
                "Track current and past orders",
                "Schedule delivery",
                "Make a payment"
              ].map((text, idx) => (
                <ListItem key={idx}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: accentColor }} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}