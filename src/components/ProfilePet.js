import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Corousel from "./Corousel";
import {
  Breadcrumbs,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button } from "@mui/material";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import { Tab } from "@mui/base";
import { padding } from "@mui/system";

function createData(name, value) {
  return { name, value };
}

const rows = [
  createData("SKU", ": #1000078"),
  createData("Gender", ": Female"),
  createData("Age", ": 2 Months"),
  createData("Color", ": Small"),
  createData("Vaccinated", ": Yes"),
  createData("Dewormed", ": Yes"),
  createData("Cert", ": Yes (MKA)"),
  createData("Microchip", ": Yes"),
  createData("Location", ": Vietnam"),
  createData("Published Date", ": 12-Oct-2022"),
  createData(
    "Additional Information",
    ": Pure breed Shih Tzu. Good body structure. Witch MKA cert and Microchip. Father from champio lineage"
  ),
];

function handleClick(event) {
  event.preventDefault();

  console.info("You clicked a breadcrumb.");
}

const ProfilePet = (pet) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href=""
      onClick={handleClick}
    >
      Dog
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href=""
      onClick={handleClick}
    >
      Large Dog
    </Link>,

    <Typography key="3" color="text.primary">
      Shiba Inu Sepia
    </Typography>,
  ];

  console.log(pet);
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: 2,
          pb: 3,
          mb: 3,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Stack direction={"row"}>
            <Stack width={"50%"}>
              <img
                src={pet.pet.image}
                loading="lazy"
                style={{
                  borderRadius: 10,
                  objectFit: "cover",
                  width: "100%",
                  height: "476px",
                }}
              />
              <Corousel></Corousel>
            </Stack>
            <Stack width={"50%"} direction="column" sx={{ marginLeft: "20px" }}>
              <Box>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Box>
              <Box
                sx={{
                  textAlign: "start",
                  paddingTop: "20px",
                  color: "#99A2A5",
                }}
              >
                SKU #1000078
              </Box>
              <Box
                sx={{
                  textAlign: "start",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                Shiba Inu Sepia
              </Box>
              <Box
                sx={{
                  textAlign: "start",
                  fontSize: "20px",
                  fontWeight: "bold",
                  paddingTop: "7px",
                }}
              >
                34.000.000 VND
              </Box>
              <Stack
                direction="row"
                sx={{
                  paddingTop: "20px",
                  gap: "30px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    backgroundColor: "#003459",
                  }}
                >
                  Contact us
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    color: "#002A48",
                    borderColor: "#002A48",
                  }}
                >
                  <IconButton
                    sx={{
                      color: "#002A48",
                    }}
                  >
                    <SmsOutlinedIcon />
                  </IconButton>
                  Chat with Monito
                </Button>
              </Stack>

              <Box marginTop="20px">
                <TableContainer component={Paper} elevation={0}>
                  <Table
                    aria-label="simple table"
                    sx={{
                      width: "100%",
                      textAlign: "start",
                    }}
                  >
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": {
                              border: 0,
                            },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="left">{row.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ProfilePet;
