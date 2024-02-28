import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Sponsor = () => {
  return (
    <div>
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
    </div>
  );
};

export default Sponsor;
