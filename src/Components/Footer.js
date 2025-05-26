import React from "react";
import { Box, Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Facebook, Instagram, Pinterest, YouTube } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#264653", color: "#fff", mt: 8, pt: 6 }}>
      <Grid container spacing={4} justifyContent="center" px={{ xs: 2, sm: 8 }}>

        <Grid item xs={12}>
          <Box textAlign="center">
            <Typography variant="h6" gutterBottom>Sign Up For Emails</Typography>
            <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
              <TextField
                size="small"
                placeholder="Type your email"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '& input': { color: 'white' },
                  },
                }}
              />
              <Button variant="contained" sx={{ bgcolor: "#264653", color: "#fff" }}>
                Sign Up
              </Button>
            </Box>
            <Typography variant="body2" mt={1}>
              We will not share, sell, or trade your email.{" "}
              <Link component={RouterLink} to="/PrivacyPolicy" underline="hover" color="inherit">
                Privacy Policy
              </Link>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={10} md={9}>
          <Grid container spacing={3} justifyContent="space-between">
            {[
              {
                title: "Get in Touch",
                items: [
                  { text: "Contact Us", path: "/ContactUs" },
                  { text: "Store Locations" },
                  { text: "Free Design Services" },
                ],
                extra: <Button variant="outlined" size="small">Live Chat</Button>,
              },
              {
                title: "Customer Service",
                items: [
                  { text: "Returns & Exchanges", path: "/ReturnAndExchanges" },
                  { text: "Customer Service" },
                  { text: "Delivery Information" },
                  { text: "FAQ", path: "/faq" },
                ],
              },
              {
                title: "Design Tools",
                items: [
                  { text: "Ideas & Advice" },
                  { text: "Free Fabric & Leather Swatches" },
                  { text: "Customer Photos" },
                  { text: "Blog" },
                ],
              },
              {
                title: "Resources",
                items: [
                  { text: "Product Care, Assembly & Safety" },
                  { text: "Gift Cards" },
                  { text: "Product Recalls" },
                  { text: "CA Transparency Act" },
                  { text: "Site Map" },
                ],
              },
              {
                title: "Our Company",
                items: [
                  { text: "About Us", path: "/AboutUs" },
                  { text: "Careers" },
                  { text: "Meet Our Craftspeople" },
                  { text: "For Business" },
                  { text: "Sustainability" },
                ],
              },
              {
                title: "Clearance",
                items: [
                  { text: "Save 20-50% on discontinued furniture and home decor." },
                  { text: "Shop Clearance" },
                ],
              },
            ].map((section, i) => (
              <Grid item xs={6} sm={4} md={2} key={i}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {section.title}
                </Typography>
                {section.items.map((item, idx) => (
                  <Typography key={idx} variant="body2" sx={{ mb: 0.5 }}>
                    {item.path ? (
                      <Link
                        component={RouterLink}
                        to={item.path}
                        underline="hover"
                        color="inherit"
                      >
                        {item.text}
                      </Link>
                    ) : (
                      <Link href="#" underline="hover" color="inherit">
                        {item.text}
                      </Link>
                    )}
                  </Typography>
                ))}
                {section.extra && <Box mt={1}>{section.extra}</Box>}
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ bgcolor: "#264653", color: "#fff", py: 3 }}>
            <Grid container justifyContent="space-between" alignItems="center" px={{ xs: 2, sm: 8 }}>
              <Grid item>
                <Typography variant="body2">Certified B Corporation</Typography>
              </Grid>
              <Grid item>
                <Box display="flex" gap={2}>
                  <Pinterest sx={{ fontSize: 20 }} />
                  <Facebook sx={{ fontSize: 20 }} />
                  <Instagram sx={{ fontSize: 20 }} />
                  <YouTube sx={{ fontSize: 20 }} />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box textAlign="center" py={2}>
            <Typography variant="caption">
              <Link component={RouterLink} to="/PrivacyPolicy" color="inherit">Privacy Policy</Link>
              <br/>
              © 2007–2025 FurniStore. All Rights Reserved.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
