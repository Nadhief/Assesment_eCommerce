import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
export default function HeroExplore() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ pl: 5, pr: 5 }}>
        <Grid container spacing={2}>
          <Grid
            xs={12}
            lg={6}
            container
            justifyContent="center"
            sx={{ width: "50%" }}
          >
            <Box sx={{ width: "100%" }}>
              <img
                src={"/heroexplore.png"}
                loading="lazy"
                style={{ objectFit: "cover", width: "100%" }}
                alt=""
              />
            </Box>
          </Grid>
          <Grid xs={12} lg={6} container justifyContent="center">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Stack sx={{ alignItems: "end" }}>
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
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    color: "#002A48",
                    textAlign: "end",
                  }}
                >
                  Thousands more fun!
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ paddingTop: 2, textAlign: "end" }}
                >
                  Having a pet means you have more joy, a new friend, a happy
                  person who will always be with you to have fun. We have 200+
                  different pets that can meet your needs!
                </Typography>
              </Stack>
              <Box
                sx={{ display: "flex", paddingTop: 4, justifyContent: "end" }}
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
        </Grid>
      </Box>
    </Container>
  );
}
