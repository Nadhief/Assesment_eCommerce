import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const ListPets = ({ list }) => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: 8 }}>
        <Box>
          <Typography variant="h6">Whats new?</Typography>
          <Stack
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#003459",
                fontWeight: "bold",
                mb: { xs: 2, md: 0 },
              }}
            >
              Take A Look At Some Of Our Pets
            </Typography>
            <Button
              variant="outlined"
              sx={{
                border: "1px solid #003459",
                color: "#003459",
                borderRadius: 30,
                width: { xs: "100%", md: "auto" },
                mt: { xs: 2, md: 0 },
              }}
            >
              View More
            </Button>
          </Stack>
          <Box sx={{ flexGrow: 1, pt: 5 }}>
            <Grid container spacing={2}>
              {list.map((pet, index) => (
                <>
                  <Grid item xs={6} md={4} lg={3}>
                    <Box
                      sx={{
                        textAlign: "center",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        borderRadius: 2,
                      }}
                    >
                      <img
                        src={pet.image}
                        loading="lazy"
                        style={{
                          borderRadius: 10,
                          objectFit: "contain",
                          width: "100%",
                        }}
                      />
                      <Box sx={{ textAlign: "start", pt: 2, ml: 1 }}>
                        <Typography sx={{ fontWeight: "bold", color: "black" }}>
                          {pet.title}
                        </Typography>
                        <Stack spacing={2} direction="row">
                          <Typography>Gene: {pet.gene}</Typography>
                          <Typography>Age: {pet.age}</Typography>
                        </Stack>
                        <Typography sx={{ fontWeight: "bold", color: "black" }}>
                          6.900.000 VND
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ListPets;
