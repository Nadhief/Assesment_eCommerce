import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Knowledge = ({ list }) => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <>
      <Box>
        <Typography variant="h6">You already know ?</Typography>
        <Stack
          sx={{
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#003459",
              fontWeight: "bold",
              mb: { xs: 2, md: 0 },
            }}
          >
            Useful Pet Knowledge
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
      </Box>
      <Box sx={{ flexGrow: 1, pt: 5 }}>
        <Grid container spacing={2}>
          {list.map((knowledge, index) => (
            <>
              <Grid item xs={12} lg={4}>
                <Box
                  minHeight={450}
                  maxHeight={450}
                  sx={{
                    // pt: 1,
                    textAlign: "center",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    borderRadius: 2,
                  }}
                >
                  <img
                    src={knowledge.image}
                    loading="lazy"
                    style={{
                      borderRadius: 10,
                      objectFit: "contain",
                      width: "100%",
                    }}
                  />
                  <Box sx={{ textAlign: "start", pt: 2, ml: 1 }}>
                    <Chip
                      label={knowledge.badge}
                      onClick={handleClick}
                      color="primary"
                    />
                    <Typography
                      sx={{ fontWeight: "bold", color: "black", pt: 2 }}
                    >
                      {knowledge.title}
                    </Typography>
                    <Typography
                      // noWrap
                      sx={{
                        pt: 1,
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: 3, // Number of lines to show
                      }}
                    >
                      {knowledge.deskripsi}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Knowledge;
