import React from "react";
import { Container, Typography } from "@mui/material";

const TermsAndConditions = () => {
  const brandColor = "#264653";

  return (
    <main>
      <Typography variant="h4" sx={{ color: brandColor, textAlign:"center",py:3 }}>
         Terms and Conditions
      </Typography>

      <Container sx={{ mt: 5, color:brandColor }}>
        <Typography variant="h5" sx={{ color: brandColor, mb: 2 }}>
          FurniStore, Inc. Web Site Terms of Use
        </Typography>

        <Typography paragraph>
          FurniStore, Inc. is pleased to make this site located at roomandboard.com (the “website”) available for your use and benefit. By using, browsing and/or accessing this website, including any purchases of goods and any purchases or use of gift cards (collectively, “use”), you warrant that you are of the age of majority and agree to these Terms of Use. You must be at least sixteen (16) years of age to use this website. By using this website, you represent and warrant that you are at least sixteen (16) years of age. Use of this website is strictly voluntary. Please take a moment to review our Terms of Use. Your use of this website constitutes your agreement to follow these rules and to be bound by them. If you do not agree with our Terms of Use and Privacy Policy, do not use the roomandboard.com website.
        </Typography>

        <Typography paragraph>
          These Terms Include an Agreement to Arbitrate on an Individual Basis to Resolve Disputes and a Class Action Waiver.
        </Typography>

        <Typography variant="h6" sx={{ color: brandColor, mt: 4 }}>
          Collection of Visitor Information on This Site
        </Typography>

        <Typography paragraph>
          Any information collected at this website is governed by the Privacy Policy unless otherwise stated. To access and use certain services available through the website, you may be required to register with us through a login/registration page and you must agree to be bound by any additional applicable terms and conditions. You are not allowed to create an account or provide us with any personal information through this website, including the registration page, unless you are at least sixteen (16) years of age.
        </Typography>

        <Typography variant="h6" sx={{ color: brandColor, mt: 4 }}>
          Mobile Terms and Conditions
        </Typography>

        <Typography paragraph>
          FurniStore offers a mobile messaging service to provide (1) delivery updates and (2) marketing and promotional materials. Our Mobile Terms & Conditions, which govern our mobile messaging service, are incorporated into these Terms of Use. If you have opted into receiving mobile texts for (1) updates about your order and account info and/or (2) marketing communications, please review our Mobile Terms & Conditions. If you do not agree with our Terms of Use, Privacy Policy, and Mobile Terms & Conditions, please do not use our mobile messaging service.
        </Typography>

        <Typography variant="h6" sx={{ color: brandColor, mt: 4 }}>
          Sweepstakes
        </Typography>

        <Typography paragraph>
          We may offer sweepstakes on our website. The specific rules for each sweepstakes will be made available online, the link for which shall be provided in advertisements for the sweepstakes.
        </Typography>
      </Container>
    </main>
  );
};

export default TermsAndConditions;
