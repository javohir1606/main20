import { Badge, Box, Button, Drawer, IconButton, Stack } from "@mui/material";
import React from "react";
import { CartIcon } from "../../assets/icon/icon";
import { Card } from "../card/card";
export const Header = () => {
  const [showP, setShowP] = React.useState(false);
  return (
    <Box bgcolor={"blue"} padding={"20px"}>
      <Drawer onClose={() => setShowP(false)} open={showP} anchor="left">
        <Card />
      </Drawer>
      <Stack maxWidth={"1200px"} mx={"auto"}>
        <Stack maxWidth={"100px"} >
          <IconButton onClick={() => setShowP(true)} aria-label="cart">
            <Badge badgeContent={4} color="error">
              <CartIcon />
            </Badge>
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};
