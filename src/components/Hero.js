import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
export default function Hero() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Container maxWidth="xl">
      <Box sx={{ ml: 5, mr: 5 }}>
        <Grid container spacing={2}>
          <Grid xs={12} md={6} container justifyContent="center">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Stack sx={{}}>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    color: "#002A48",
                  }}
                >
                  One More Friend
                </Typography>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "#002A48" }}
                >
                  Thousands more fun!
                </Typography>
                <Typography variant="h6" sx={{ paddingTop: 2 }}>
                  Having a pet means you have more joy, a new friend, a happy
                  person who will always be with you to have fun. We have 200+
                  different pets that can meet your needs!
                </Typography>
              </Stack>
              <Box sx={{ display: "flex", paddingTop: 4 }}>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="outlined"
                    sx={{ border: "1px solid #003459", color: "#003459" }}
                  >
                    View Intro
                  </Button>
                  <Button variant="contained" sx={{ background: "#003459" }}>
                    Explore Now
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={6} container justifyContent="center">
            <Box>
              <img src={"/hero.png"} loading="lazy" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
