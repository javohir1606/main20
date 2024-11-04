import { Box, Container, Stack } from "@mui/system";
import { products } from "./components/data/products";
import { Button, Typography } from "@mui/material";
function App() {
  return (
    <>
      <Stack maxWidth={"1200px"}>
        <Container>
          <Stack>
            {products.map((item) => (
              <Box key={item.id}>
                <img src={item.img} alt="img" />
                <Typography>{item.title}</Typography>
                <Typography>{item.price}</Typography>
                <Typography>{item.brand}</Typography>
                <Button
                  sx={{
                    backgroundColor: "#94ce0c",
                    color: "#fff",
                    padding: "5px 10px",
                    "&:hover": { backgroundColor: "#0056b3" },
                  }}
                >
                  Buy
                </Button>
              </Box>
            ))}
          </Stack>
        </Container>
      </Stack>
    </>
  );
}

export default App;
