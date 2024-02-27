import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
export default function Hero() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6} container justifyContent="center">
          <Box
            sx={{
              p: 2,
              border: "1px solid grey",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <Box sx={{ border: "1px solid black" }}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#002A48" }}
              >
                One More Friend
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#002A48" }}
              >
                Thousands more fun!
              </Typography>
              <Typography variant="h7">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </Typography>
            </Box>
            <Box sx={{ display: "flex", border: "1px solid black" }}>
              <Stack spacing={2} direction="row">
                <Button variant="contained">View Intro</Button>
                <Button variant="contained">Explore Now</Button>
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={6}
          container
          justifyContent="center"
          sx={{ p: 2, border: "1px solid grey" }}
        >
          <Box>
            <img src={"/hero.png"} loading="lazy" alt="" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
