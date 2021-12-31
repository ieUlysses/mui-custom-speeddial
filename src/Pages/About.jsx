import { Card, Container, Typography } from "@mui/material";
import React from "react";

export default function () {
  return (
    <Container
      sx={{
        width: "450px",
        height: "250px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Card
        sx={{
          width: "300px",
          height: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: "surfaces.primary",
          borderRadius: "5px"
        }}
      >
        <Typography textAlign="center"> About </Typography>
      </Card>
    </Container>
  );
}
