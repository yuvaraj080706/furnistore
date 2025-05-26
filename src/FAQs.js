import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Grid,
  Divider
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    title: "Shopping with FurniStore",
    items: [
      {
        question: "How do I contact Room & Board if I have questions or want to place an order?",
        answer: (
          <>
            <p>
              Our expert Design Associates are ready to help at 800.301.9720. We are
              available seven days a week to answer your questions.
            </p>
            <p>Monday – Friday: 8 a.m. to 7 p.m. (CT)</p>
            <p>Saturday – Sunday: 10 a.m. to 5 p.m. (CT)</p>
          </>
        )
      },
      {
        question: "Where are your stores located?",
        answer: <p>We have locations across the country, and more coming soon! Find a store</p>
      },
      {
        question: "What is a Design Associate?",
        answer: (
          <p>
            Every person working in our stores and at our toll-free number is an expert
            Design Associate ready to help you create your ideal home. With first-hand
            product knowledge and a passion for design, our Design Associates will help
            you make choices that meet your needs and reflect your style. We know that
            selecting furniture for your home is very personal. We don't want you to
            feel pressured to make a purchase—that's why our Design Associates don't
            work on commission.
          </p>
        )
      },
      {
        question: "How do I pay* for my furniture?",
        answer: (
          <>
            <p>Credit cards: We accept VISA, MasterCard, Discover and American Express.</p>
            <p>
              Gift cards: Room & Board gift cards can be redeemed online, in our stores
              or by phone at 800.301.9720.
            </p>
            <p>
              Personal checks, money orders: Contact a Design Associate for more
              information at 800.301.9720.
            </p>
            <p>
              Affirm financing: Monthly payments available for U.S. customers using our
              financing partner, Affirm.
            </p>
            <p>*Please note that full payment is required to ship an order.</p>
          </>
        )
      }
    ]
  },
  {
    title: "Furniture Design and Construction",
    items: [
      {
        question: "Who makes your furniture?",
        answer: (
          <p>
            We design nearly all of our own products and then partner with small,
            family-owned companies around the U.S. to make our furniture and
            accessories. More than 90% of our products are manufactured in America using
            quality U.S. and imported materials. We believe this approach allows us to
            bring you the best craftsmanship and fastest delivery with the least
            environmental impact.
          </p>
        )
      },
      {
        question:
          "What if I don't see the exact furniture size, configuration or material I need?",
        answer: (
          <p>
            We offer many ways to personalize or create your own furniture. For example,
            you can select from a wide variety of top materials for our tables, desks,
            nightstands and more. You can also create personalized cabinets and
            bookcases handcrafted to your measurements, and you can design your own
            sectional.
          </p>
        )
      },
      {
        question: "Can I use my box spring with one of your mattresses?",
        answer: (
          <p>
            Our mattresses offer superior comfort and support without requiring a box
            spring. The result is a cleaner profile and a better night's sleep. For
            these reasons, we design all of our beds to accommodate a mattress only.
          </p>
        )
      }
    ]
  }
];

const FaqsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ ml: { xs: 0, sm: 4 }, color: "#264653", fontWeight: "bold" , textAlign:"center"}}>
        FAQs
      </Typography>

      {faqs.map((section, index) => (
        <Box key={index} sx={{ mt: 6 }}>
          <Typography
            variant="h5"
            sx={{ ml: { xs: 0, sm: 4 }, mb: 3, color: "#264653", fontWeight: 600 }}
          >
            {section.title}
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={10}>
              {section.items.map((faq, i) => (
                <Accordion key={i} sx={{ mb: 2, borderRadius: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{color:'#264653'}}>
                    <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
                  </AccordionSummary>
                  <Divider/>
                  <AccordionDetails>
                    <Typography>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default FaqsPage;