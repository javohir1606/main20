import { Button, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import formatter from "../../utils/currenscy-from";
export const ProductCard = ({ title, img, brand, price }) => {
  const dispatch = useDispatch();

  return (
    <Stack>
      <Box>
        <img style={{ width: "266px" }} src={img} alt="img" />
        <Typography fontSize={"25px"}>{title}</Typography>
        <Typography>{formatter(price)} sum</Typography>
        <Typography>{brand}</Typography>
        <Button
          onClick={() => dispatch(addCart(props))}
          fullWidth
          variant="contained"
        >
          Buy
        </Button>
      </Box>
    </Stack>
  );
};

export default ProductCard;
