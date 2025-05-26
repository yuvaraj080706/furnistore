import React from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Link
} from "@mui/material";

const accentColor = "#264653";

export default function PrivacyPolicy() {
  return (
    <Box component="main" sx={{ px: { xs: 2, md: 6 }, py: 5, color: accentColor }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign:'center'}}>
        Privacy Policy
      </Typography>
      <Container maxWidth="md" sx={{my:5}}>
        <Typography variant="h5" gutterBottom>
          Types of Information We Collect
        </Typography>
        <Typography paragraph>
          In order to provide the products and services you request, we need to collect your personal information. If you do not provide the information requested, we may not be able to fulfill your request.
        </Typography>
        <Typography paragraph>The information we collect may include:</Typography>
        <List>
          {["Contact information, such as name, address, telephone number, and email address",
            "Payment information, such as credit card number, bank card numbers, check and other payment details",
            "Order and refund history",
            "Demographic information, such as age, estimated income, household information, and occupation",
            "Information about the devices you use to shop online, and browser information such as location information, MAC addresses, IP addresses, Cookies, and other online identifiers",
            "Information about your interests, preferences, and purchase history"
          ].map((item, index) => (
            <ListItem key={index}><ListItemText primary={item} /></ListItem>
          ))}
        </List>
        <Typography paragraph>
          Information may be collected from you if you interact with us on social media sites such as Pinterest, Facebook, Instagram, Twitter (X), and YouTube.
        </Typography>
        <Typography paragraph>
          While we do not store or save credit card or financial account information, our third-party vendors use credit card or financial information you provide to process purchase transaction(s) (see “Third Parties” below for more information).
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          Children Under the Age of 16
        </Typography>
        <Typography paragraph>
          We do not knowingly collect personally identifiable information from people under the age of 16. Our Websites are not intended for and are not targeted to people under the age of 16.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          How We Collect Your Information
        </Typography>
        <Typography paragraph>
          We collect information about you in a variety of ways through our Websites, our stores and mailing list.
        </Typography>
        <Typography paragraph>Information You Provide to Us</Typography>
        <List>
          {["Use of social media, or any visits of our social media channels",
            "Your visits to our Website",
            "Your use of in-store wi-fi"
          ].map((item, index) => (
            <ListItem key={index}><ListItemText primary={item} /></ListItem>
          ))}
        </List>

        <Divider sx={{ my: 4 }} />

        {["Online Order Information",
          "Appointment Scheduling",
          "In-Store Shopping",
          "Online Accounts",
          "Marketing Communications",
          "Sweepstakes"
        ].map((section, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>{section}</Typography>
            <Typography paragraph>
              {section === "Online Order Information" &&
                "When you make a purchase from our Website, we ask you to provide us with information about your purchase such as your name, email address, billing address, shipping address, phone number, and payment information."}
              {section === "Appointment Scheduling" &&
                "When you schedule a free design services appointment with a Design Associate to occur either remotely or in a store, we ask you to provide us with contact information including your name, email address, and phone number."}
              {section === "In-Store Shopping" &&
                "When you visit one of our stores, our Design Associates may ask you for information including your name, email address, billing address, shipping address, phone number, and payment information in order to process your purchase or other requests."}
              {section === "Online Accounts" &&
                "If you sign up for an online account through our Website, we may ask you to provide your email address, password, and ZIP code. You do not have to create an account to make a purchase. If you are signed into your account while you complete an online purchase, your online order information will be saved to your account. We do not store or save credit card information. We will also save your product preferences and past purchase history."}
              {section === "Marketing Communications" &&
                "If you would like to receive marketing communications from us, you may do so by signing up on our Website, by phone, or in our stores. We will ask you to provide your email address and ZIP code so we can send you email. We will ask you to provide your name and address so we can send you a catalog and/or other marketing communications by mail."}
              {section === "Sweepstakes" &&
                "We may offer sweepstakes from time to time. The official rules for our online sweepstakes will be made available on our Website. For in-store giveaways, you may request a hard copy of the official rules from a Design Associate. Sweepstakes are only open to legal residents of the United States and the District of Columbia, excluding legal residents of Rhode Island."
              }
            </Typography>
          </Box>
        ))}

        <Typography paragraph>
          By entering into a sweepstakes, you provide your personal information, including, but not limited to, your name, address, and email address, to us and third parties who are specified in the rules for each sweepstake, and you agree to receive communications from FurniStore and such third parties regarding the sweepstakes you enter. The personal information you provide to us will be treated in accordance with this Privacy Policy. The personal information you provide to third parties specified in the sweepstakes rules will be treated in accordance with such third parties’ privacy policies. FurniStore is not responsible for third parties’ use of information submitted in connection with a sweepstakes.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          Information We Collect Through Your Interactions With Us
        </Typography>

        <Typography variant="h6" gutterBottom>Website</Typography>
        <Typography paragraph>
          When you visit our Websites, we may collect information such as your IP address, domain server, type of device, type of web browser, and address of referring site, which may be used for web analytics, to approximate a user’s location, monitor fraudulent orders, and to diagnose problems with our server and administer our site. We may also collect shopping preferences and information about how you interact with our Website.
        </Typography>

        <Typography variant="h6" gutterBottom>Third Parties</Typography>
        <Typography paragraph>
          We may have functionality on our Websites that is provided, in whole or in part, by a third-party. You can usually identify such third-party functionality by the use of a trademark not owned by FurniStore on or near the functionality, or by the redirection to such third party’s website or page.
        </Typography>
        <Typography paragraph>
          We currently use Bazaarvoice, Inc. to provide photograph upload capability. For information about Bazaarvoice’s privacy practice, please review <Link href="#">Bazaarvoice’s Privacy Policy</Link>.
        </Typography>
        <Typography paragraph>
          We use Cashstar through Blackhawk Network Holdings, Inc., for FurniStore gift cards. Any information submitted or gathered when purchasing or redeeming a gift card will be subject to <Link href="#">Blackhawk Network Holdings, Inc.’s Privacy Policy</Link>.
        </Typography>
        <Typography paragraph>
          We use Worldpay from FIS Global as a third-party hosted system for payment processing. All information submitted through our Website regarding payments will be subject to <Link href="#">Worldpay’s Privacy Policy</Link>.
        </Typography>
        <Typography paragraph>
          We use Affirm to provide customers with third-party financing for purchases from FurniStore. All information submitted through our Website regarding financing will be subject to <Link href="#">Affirm’s Privacy Policy</Link>.
        </Typography>
        <Typography paragraph>
          We use Skai for omnichannel digital media management and activation. Any information submitted or gathered through our Website used by Skai will be subject to <Link href="#">Skai’s Privacy Policy</Link>.
        </Typography>
      </Container>
    </Box>
  );
}