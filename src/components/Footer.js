import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, Stack, Button, TextField, Divider } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function StickyFooter() {
  return (
    <Box>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#FCEED5",
          height: "300px",
          padding: "80px",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Box
            maxWidth="lg"
            sx={{
              backgroundColor: "#003459",
              width: "1280px",
              height: "150px",
              borderRadius: "16px",
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              sx={{
                p: 5,
              }}
              spacing={2}
            >
              <Grid item xs={4}>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "left",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Register Now So You Don't Miss Our Programs
                </Typography>
              </Grid>
              <Grid
                item
                xs={8}
                sx={{
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  p: "10px",
                  borderRadius: "13px",
                }}
              >
                <Stack
                  direction="row"
                  sx={{
                    justifyContent: "space-between",
                    display: "flex",
                    gap: "10px",
                    width: "100%",
                  }}
                >
                  <TextField
                    fullWidth
                    id="fullWidth"
                    label="Enter your Email"
                  />
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#003459",
                      width: "30%",
                    }}
                  >
                    Subcribe Now
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <Box
            maxWidth="lg"
            sx={{
              width: "1280px",
              height: "150px",
              borderRadius: "16px",
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Stack
                  direction="row"
                  spacing={8}
                  justifyContent={"flex-start"}
                >
                  <Box>Home</Box>
                  <Box>Category</Box>
                  <Box>About</Box>
                  <Box>Contact</Box>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack
                  direction={"row"}
                  spacing={5}
                  justifyContent={"flex-end"}
                >
                  <Box>
                    <FacebookRoundedIcon />
                  </Box>
                  <Box>
                    <TwitterIcon />
                  </Box>

                  <Box>
                    <InstagramIcon />
                  </Box>
                  <Box>
                    <YouTubeIcon />
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <Divider
            sx={{
              bgcolor: "#a0c4ff",
            }}
          ></Divider>
          <Box
            maxWidth="lg"
            sx={{
              width: "1280px",
              height: "80px",
              borderRadius: "16px",
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Stack direction={"row"} justifyContent={"flex-start"}>
                  © 2022 Monito. All rights reserved.
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <img src={"/logo.png"} alt="" />
              </Grid>
              <Grid item xs={4}>
                <Stack
                  direction={"row"}
                  spacing={3}
                  justifyContent={"flex-end"}
                >
                  <Box>Terms of Service</Box>
                  <Box>Privacy Policy</Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
