import React from 'react';
import { Box, Typography, Container, Grid, TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, Button, Divider } from '@mui/material';

const ContactUs = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ ml: 5, pl: 5, mt: 3, color: '#264653', textAlign:'center' }}>
         Contact Us
      </Typography>

      <Container sx={{ my: 4,color:'#264653' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography>
              Located in our Minneapolis headquarters, our expert Customer Experience Specialists are ready to assist you with everything from design ideas and product recommendations to delivery details and service questions.
            </Typography>
            <Typography sx={{ mt: 2 }}>Monday – Friday 8 a.m. to 7 p.m. (CT)</Typography>
            <Typography>Saturday – Sunday 10 a.m. to 5 p.m. (CT)</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://rnb.scene7.com/is/image/roomandboard/contactUs_0724?size=1600,1600&scl=1"
              alt="Smiling woman holding plants"
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ my: 5 }} />

      <Container sx={{ my: 4 }}>
        <Typography variant="h5" sx={{ color: '#264653', mb: 1 }}>
          📧 Email Us
        </Typography>
        <Typography variant="body1" gutterBottom sx={{color:'#264653'}}>
          Information is required unless noted.
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField fullWidth required label="Name" margin="normal" />
          <TextField fullWidth required label="Email Address" type="email" margin="normal" />
          <TextField fullWidth label="Phone (optional)" type="tel" margin="normal" />

          <FormControl fullWidth margin="normal">
            <InputLabel>Subject</InputLabel>
            <Select defaultValue="General Inquiries" label="Subject">
              <MenuItem value="General Inquiries">General Inquiries</MenuItem>
              <MenuItem value="Support">Support</MenuItem>
              <MenuItem value="Feedback">Feedback</MenuItem>
            </Select>
          </FormControl>

          <TextField fullWidth label="Your Message (optional)" multiline rows={4} margin="normal" inputProps={{ maxLength: 2000 }} />

          <FormControlLabel sx={{color:'#264653'}} control={<Checkbox />} label="Send me a copy of this email." />
          <FormControlLabel
            sx={{color:'#264653'}}
            control={<Checkbox />}
            label={
              <span >
                Please send me email updates about products and special events.{' '}
                <a href="/privacy-policy" style={{ color: '#264653' }}>Privacy Policy</a>
              </span>
            }
          />

          <Button variant="contained" sx={{ mt: 2, bgcolor: '#264653', '&:hover': { bgcolor: '#1f3b45' } }}>
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
