import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider
} from "@mui/material";

const accentColor = "#264653";

const aboutSections = [
  {
    title: "Better for People",
    text: "Supporting and building the well-being of staff, craftspeople, and local communities is part of our everyday work.",
    image: "https://rnb.scene7.com/is/image/roomandboard/aboutUs_betterPeople?wid=2368",
    button: "See how we put people first",
    reverse: false
  },
  {
    title: "American Craft",
    text: "American manufacturers make more than 90% of our furniture and decor, supporting local communities, businesses and craftspeople across the country.",
    image: "https://rnb.scene7.com/is/image/roomandboard/aboutUs_americanCraft?wid=2368",
    button: "Meet our craftspeople",
    reverse: true
  },
  {
    title: "Committed to Sustainability",
    text: "Sustainable practices have been fundamental to our company since 1980. Now, we’re setting ambitious goals for better products and practices in service to people and the planet.",
    image: "https://rnb.scene7.com/is/image/roomandboard/aboutUs_sustainable_0423?wid=2368",
    button: "Learn about our sustainability goals",
    reverse: false
  }
];

export default function AboutUs() {
  return (
    <Box sx={{ backgroundColor: "#fff", pb: 6, color:accentColor }}>
      <Typography variant="h4" className="display-5" sx={{ pl: { xs: 2, md: 6 }, pt: 4, color: accentColor,textAlign:"center" }}>
         About Us
      </Typography>

      {aboutSections.map((section, index) => (
        <Container key={index} sx={{ my: 6 }}>
          <Grid container spacing={4} alignItems="center" direction={section.reverse ? "row-reverse" : "row"}>
            <Grid item xs={12} md={6}>
              <img src={section.image} alt={section.title} style={{ width: "100%", borderRadius: 8 }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: accentColor }}>
                {section.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {section.text}
              </Typography>
              <Button variant="contained" sx={{ bgcolor: accentColor, '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#264653',
                    border: '2px solid #264653',
                    boxShadow: 'none',
                    }, }}>
                {section.button}
              </Button>
            </Grid>
          </Grid>
          {index !== aboutSections.length - 1 && <Divider sx={{ my: 6 }} />}
        </Container>
      ))}
    </Box>
  );
}
