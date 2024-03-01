import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Link from "@mui/material/Link";

const ListPets = ({ list, title, desc }) => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: 8 }}>
        <Box>
          <Typography sx={{ fontSize: "16px" }}>{title}</Typography>
          <Stack
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Typography
              sx={{
                color: "#003459",
                fontWeight: "bold",
                mb: { xs: 2, md: 0 },
                fontSize: "24px",
              }}
            >
              {desc}
            </Typography>
            <Button
              variant="outlined"
              sx={{
                border: "1px solid #003459",
                color: "#003459",
                borderRadius: 30,
                width: { xs: "100%", md: "auto" },
                mt: { xs: 2, md: 0 },
                gap: 1,
                textTransform: "none",
              }}
            >
              View More
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: "10px" }} />
            </Button>
          </Stack>
          <Box sx={{ flexGrow: 1, pt: 5 }}>
            <Grid container spacing={2}>
              {list.map((pet, index) => (
                <>
                  <Grid item xs={6} md={4} lg={3}>
                    <Link href={`/detail/${index}`} underline="none">
                      <Box
                        sx={{
                          textAlign: "center",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                          borderRadius: 2,
                          minHeight: { xs: 320, md: 380 },
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
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              color: "black",
                              fontSize: "16px",
                            }}
                          >
                            {pet.title}
                          </Typography>
                          <Stack spacing={2} direction="row">
                            <Typography sx={{ fontSize: "12px" }}>
                              <span style={{ color: "gray" }}>Gene:</span>{" "}
                              <span
                                style={{ color: "#667479", fontWeight: "bold" }}
                              >
                                {pet.gene}
                              </span>
                            </Typography>
                            <Typography sx={{ fontSize: "12px" }}>
                              <span style={{ color: "gray" }}>Age:</span>{" "}
                              <span
                                style={{ color: "#667479", fontWeight: "bold" }}
                              >
                                {pet.age}
                              </span>
                            </Typography>
                          </Stack>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              color: "black",
                              fontSize: "16px",
                            }}
                          >
                            6.900.000 VND
                          </Typography>
                        </Box>
                      </Box>
                    </Link>
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
