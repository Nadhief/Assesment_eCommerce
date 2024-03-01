import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Link from "@mui/material/Link";

const ListProduct = ({ list }) => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: 8 }}>
        <Box>
          <Typography sx={{ fontSize: "16px" }}>
            Hard to choose right products for your pets?
          </Typography>
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
              Our Products
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
              {list.map((item, index) => (
                <>
                  <Grid item xs={6} md={4} lg={3}>
                    <Link href={`/detail/${index}`} underline="none">
                      <Box
                        sx={{
                          textAlign: "center",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                          borderRadius: 2,
                          minHeight: { xs: 320, md: 430 },
                        }}
                      >
                        <img
                          src={item.image}
                          loading="lazy"
                          style={{
                            borderRadius: 10,
                            objectFit: "contain",
                            width: "100%",
                          }}
                        />
                        <Box
                          sx={{
                            textAlign: "start",
                            pt: 2,
                            p: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              color: "black",
                              fontSize: "16px",
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Stack spacing={2} direction="row">
                            <Typography sx={{ fontSize: "12px" }}>
                              <span style={{ color: "gray" }}>Gene:</span>{" "}
                              <span
                                style={{ color: "#667479", fontWeight: "bold" }}
                              >
                                {item.product}
                              </span>
                            </Typography>
                            <Typography sx={{ fontSize: "12px" }}>
                              <span style={{ color: "gray" }}>Age:</span>{" "}
                              <span
                                style={{ color: "#667479", fontWeight: "bold" }}
                              >
                                {item.size}
                              </span>
                            </Typography>
                          </Stack>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              color: "black",
                              fontSize: "16px",
                              pb: 1,
                            }}
                          >
                            6.900.000 VND
                          </Typography>
                          <Stack
                            direction={"row"}
                            sx={{
                              bgcolor: "#FCEED5",
                              borderRadius: 1,
                              gap: 2,
                              p: 1,
                            }}
                          >
                            <img
                              src="/gift.png"
                              loading="lazy"
                              width="20"
                              height="20"
                            />
                            <Typography
                              sx={{
                                fontSize: "14px",
                                fontWeight: "bold",
                                color: "#002A48",
                              }}
                            >
                              Free Toy & Free Shaker
                            </Typography>
                          </Stack>
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

export default ListProduct;
