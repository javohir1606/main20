import { Box, Container, height, Stack } from "@mui/system";
import { products } from "./components/data/products";
import { Button, Drawer, Grid2, Typography } from "@mui/material";
import React from "react";
import { Header } from "./components/header/header";

function App() {
 

  return (
    <>
      <Stack maxWidth={"1200px"}>
        <Container>
           <Header/>
          <Grid2 container alignItems={"center"} spacing={2} mt="20px">
            {products.map((item) => (
              <Grid2
                xs={12}
                sm={6}
                md={4}
                justifyContent={"center"}
                key={item.id}
              >
                <Box>
                  <img
                    src={item.img}
                    alt="img"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />

                  <Typography>{item.title}</Typography>
                  <Typography>{item.price} sum</Typography>
                  <Typography>{item.brand}</Typography>
                  <Button
                    onClick={() => dispatch(addCart(item))}
                    fullWidth
                    variant="contained"
                  >
                    Buy
                  </Button>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Stack>
    </>
  );
}

export default App;
