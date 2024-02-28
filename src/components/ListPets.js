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
        <Box sx={{}}>
          <Typography variant="h6">Whats new?</Typography>
          <Stack
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
            direction="row"
          >
            <Typography
              variant="h5"
              sx={{
                color: "#003459",
                fontWeight: "bold",
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
              }}
            >
              View More
            </Button>
          </Stack>
        </Box>
        <Box sx={{ flexGrow: 1, pt: 5 }}>
          <Grid container spacing={2}>
            {list.map((pet, index) => (
              <>
                <Grid item xs={6} md={4} lg={3}>
                  <Box
                    sx={{
                      pt: 1,
                      textAlign: "center",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      borderRadius: 2,
                    }}
                  >
                    <img
                      src={pet.image}
                      loading="lazy"
                      style={{
                        borderRadius: "5%",
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
    </Container>
  );
};

export default ListPets;
