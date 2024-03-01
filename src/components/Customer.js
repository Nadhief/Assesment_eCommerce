import { Grid, Pagination, Typography, Link, Paper } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";

const Customer = () => {
  return (
    <Box>
      <Typography variant="h6" fontWeight="bold">
        Our lovely customer
      </Typography>
      <Box></Box>
      <Stack direction="row" gap="10px">
        <Paper elevation={0} square={false}>
          <img src="/customer 1.png"></img>
        </Paper>
        <Paper elevation={0} square={false}>
          <img src="/customer 2.png"></img>
        </Paper>
        <Paper elevation={0} square={false}>
          <img src="/customer 3.png"></img>
        </Paper>
        <Paper elevation={0} square={false}>
          <img src="/customer 4.png"></img>
        </Paper>
        <Paper elevation={0} square={false}>
          <img src="/customer 5.png"></img>
        </Paper>
      </Stack>
      <Stack alignItems="center" pt="10px">
        <Pagination count={7} />
      </Stack>
    </Box>
  );
};

export default Customer;
