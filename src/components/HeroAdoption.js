import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default function HeroAdoption() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ pl: 5, pr: 5 }}>
        <Grid container spacing={2}>
          <Grid xs={12} lg={6} container justifyContent="center">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Stack sx={{ alignItems: "start" }}>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    color: "#002A48",
                  }}
                >
                  Adoption
                </Typography>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    color: "#002A48",
                    textAlign: "start",
                  }}
                >
                  We Need Help. So Do They.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ paddingTop: 2, textAlign: "start" }}
                >
                  Adopt a pet and give it a home, it will be love you back
                  unconditionally.
                </Typography>
              </Stack>
              <Box
                sx={{ display: "flex", paddingTop: 4, justifyContent: "start" }}
              >
                <Stack spacing={2} direction="row">
                  <Button
                    variant="outlined"
                    sx={{
                      border: "1px solid #003459",
                      color: "#003459",
                      borderRadius: 30,
                    }}
                  >
                    View Intro
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ background: "#003459", borderRadius: 30 }}
                  >
                    Explore Now
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid
            xs={12}
            lg={6}
            container
            justifyContent="center"
            sx={{ width: "50%" }}
          >
            <Box sx={{ width: "100%" }}>
              <img
                src={"/adoption.png"}
                loading="lazy"
                style={{ objectFit: "cover", width: "100%" }}
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
