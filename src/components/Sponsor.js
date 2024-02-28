import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
const Sponsor = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
        direction="row"
      >
        <Typography display="inline">
          Proud to be part of{" "}
          <Typography
            display="inline"
            variant="h4"
            sx={{
              color: "#003459",
              fontWeight: "bold",
            }}
          >
            Pet Sellers
          </Typography>
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
      <Stack direction="row" spacing={2} sx={{ pt: 4 }}>
        <img src="/sheba.png" loading="lazy" style={{ borderRadius: "5%" }} />

        <img src="/whiskas.png" loading="lazy" style={{ borderRadius: "5%" }} />

        <img src="/bakers.png" loading="lazy" style={{ borderRadius: "5%" }} />

        <img src="/felix.png" loading="lazy" style={{ borderRadius: "5%" }} />

        <img src="/goodboy.png" loading="lazy" style={{ borderRadius: "5%" }} />

        <img
          src="/butchers.png"
          loading="lazy"
          style={{ borderRadius: "5%" }}
        />

        <img
          src="/pedigree.png"
          loading="lazy"
          style={{ borderRadius: "5%" }}
        />
      </Stack>
    </Box>
  );
};

export default Sponsor;
