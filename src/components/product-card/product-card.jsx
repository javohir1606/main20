import { Button, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";

export const ProductCard = (img, title, price, brand, id) => {
  return (
    <Stack>
      <Container>
        <Box>
          <img src={img} alt="img" />
          <Typography fontSize={"25px"}>{title}</Typography>
          <Typography>{formatter(price)} sum</Typography>
          <Typography>{brand}</Typography>
         
        </Box>
      </Container>
    </Stack>
  );
};

export default ProductCard;
