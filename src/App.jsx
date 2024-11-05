import { Box, Container, height, Stack } from "@mui/system";
import { products } from "./components/data/products";
import { Button, Drawer, Grid2, Typography } from "@mui/material";
import React from "react";
import { Header } from "./components/header/header";
import ProductCard from "./components/product-card/product-card";

function App() {
  return (
    <>
      <Stack maxWidth={"1200px"}>
        <Container>
          <Header />
          <Grid2 container alignItems={"center"} spacing={2} mt="20px">
            {products.map((item) => (
              <Grid2
                px={0}
                gap={"20px"}
                size={3}
                justifyContent={"center"}
                key={item.id}
              >
                <ProductCard
                  brand={item.brand}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                />
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Stack>
    </>
  );
}

export default App;
