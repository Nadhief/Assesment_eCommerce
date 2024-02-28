import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const ListPets = ({ list }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: 8 }}>
        <Box>
          <Typography variant="h6">Whats new?</Typography>
        </Box>
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
        <Box sx={{ flexGrow: 1, pt: 5 }}>
          <Grid container spacing={2}>
            {list.map((pet, index) => (
              <>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Item>
                    <img
                      src={pet.image}
                      loading="lazy"
                      style={{ borderRadius: "5%" }}
                    />
                    <Box sx={{ textAlign: "start", pt: 2, ml: 3 }}>
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
                  </Item>
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
