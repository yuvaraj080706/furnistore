import React from 'react';
import { Container, Typography, Breadcrumbs, Link, Box } from '@mui/material';

const ReturnsAndExchanges = () => {
  const brandColor = '#264653';

  return (
    <Container sx={{ mt: 5, color: brandColor }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ color: brandColor }}>
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Customer Service
        </Link>
        <Typography color={brandColor}>Free Returns & Exchanges</Typography>
      </Breadcrumbs>

      <Typography variant="h4" sx={{ mt: 3, mb: 4, color: brandColor }}>
        Returns & Exchanges
      </Typography>

      <Box>
        <Typography variant="h6" sx={{ color: brandColor }}>Returning Furniture and Home Decor</Typography>
        <Typography paragraph>
          We want you to be happy with your purchase and understand it can take a few days to a few weeks to know if your new items will work for you. We encourage you to make a return or exchange in a timely manner because damaged, worn, or altered items may be refused or result in an adjustment to your refund.
        </Typography>

        <Typography variant="h6" sx={{ color: brandColor }}>Free Cancellations</Typography>
        <Typography paragraph>
          We don't charge a fee for canceling items, even custom items or items made just for you.
        </Typography>

        <Typography variant="h6" sx={{ color: brandColor }}>Free Return Delivery</Typography>
        <Typography paragraph>
          We don't charge a delivery fee for returns or exchanges within the 48 contiguous states. However, original delivery charges are not refundable.
        </Typography>

        <Typography variant="h6" sx={{ color: brandColor }}>In Case of Damage</Typography>
        <Typography paragraph>
          If an item is unsatisfactory, we will work with you to resolve the issue to your satisfaction with expert product repair, parts replacement, or an exchange.
        </Typography>

        <Typography variant="h6" sx={{ color: brandColor }}>Refunds</Typography>
        <Typography paragraph>
          Credit card purchases will be refunded to the card used. Gift card purchases will be refunded to a gift card. Cash or check purchases will receive a refund check by mail. A receipt is required to return items purchased in a store without using a Room & Board account.
        </Typography>

        <Typography variant="h6" sx={{ color: brandColor }}>Gift Card Returns</Typography>
        <Typography paragraph>
          We do not allow gift cards to be returned. Items purchased with a gift card may be returned or exchanged following our other return and exchange policies.
        </Typography>
      </Box>
    </Container>
  );
};

export default ReturnsAndExchanges;
