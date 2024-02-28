import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

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
            Useful Pet Knowledge
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
      </Box>
      <Box sx={{ flexGrow: 1, pt: 5 }}>
        <Grid container spacing={2}>
          {list.map((knowledge, index) => (
            <>
              <Grid item xs={12} lg={4}>
                <Box
                  //   maxHeight={490}
                  sx={{
                    pt: 1,
                    textAlign: "center",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    borderRadius: 2,
                  }}
                >
                  <img
                    src={knowledge.image}
                    loading="lazy"
                    style={{ borderRadius: "5%" }}
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
                      sx={{
                        pt: 1,
                        // overflow: "hidden",
                        // textOverflow: "ellipsis",
                        // height:100
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
