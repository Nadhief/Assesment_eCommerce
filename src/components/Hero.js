import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
export default function Hero() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundImage: `url(/heroorange.png)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 0 bottom 0",
        backgroundSize: "45%",
        zIndex: -1,
      }}
    >
      <Box sx={{ width: "100%", pt: 10 }}>
        <Grid
          container
          sx={{
            width: "100%",
          }}
        >
          <Grid xs={12} lg={6} container justifyContent="center">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // border: "1px solid red",
                width: "100%",
              }}
            >
              <Stack>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#002A48",
                    fontSize: { xs: "46px", md: "60px" },
                  }}
                >
                  One More Friend
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#002A48",
                    fontSize: { xs: "28px", md: "46px" },
                  }}
                >
                  Thousands more fun!
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    paddingTop: 2,
                    fontSize: { xs: "12px", md: "16px" },
                    width: { xs: "100%", md: "80%" },
                  }}
                >
                  Having a pet means you have more joy, a new friend, a happy
                  person who will always be with you to have fun. We have 200+
                  different pets that can meet your needs!
                </Typography>
              </Stack>
              <Box sx={{ display: "flex", paddingTop: 4 }}>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="outlined"
                    sx={{
                      border: "1px solid #003459",
                      color: "#003459",
                      borderRadius: 30,
                      gap: 1,
                      textTransform: "none",
                    }}
                  >
                    View Intro <PlayCircleOutlinedIcon />
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      background: "#003459",
                      borderRadius: 30,
                      textTransform: "none",
                    }}
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
            sx={{
              width: "50%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <img
                src={"/hero.png"}
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
