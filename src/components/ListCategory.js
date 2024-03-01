import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from "@mui/material/Pagination";
import Hidden from "@mui/material/Hidden";
import Link from "@mui/material/Link";
import CircleIcon from "@mui/icons-material/Circle";

const ListPets = ({ list }) => {
  const [min, setMin] = React.useState("");
  const [max, setMax] = React.useState("");

  const handleChange = (event) => {
    setMin(event.target.value);
    setMax(event.target.value);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ flexGrow: 1, gap: 0, pl: 2 }}>
        <Hidden mdDown>
          <Grid xs={3}>
            <Box sx={{ pt: 6 }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#003459",
                  fontWeight: "bold",
                }}
              >
                Filter
              </Typography>
            </Box>
            <Stack sx={{ pt: 3 }}>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h7"
                  sx={{
                    color: "#003459",
                    fontWeight: "bold",
                  }}
                >
                  Gender
                </Typography>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Male" />
                  <FormControlLabel control={<Checkbox />} label="Female" />
                </FormGroup>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h7"
                  sx={{
                    color: "#003459",
                    fontWeight: "bold",
                  }}
                >
                  Color
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <Stack
                        direction={"row"}
                        sx={{ gap: 1, alignItems: "center" }}
                      >
                        <CircleIcon
                          fontSize="small"
                          sx={{ color: "#FF564F" }}
                        />
                        <Typography>Red</Typography>
                      </Stack>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <Stack
                        direction={"row"}
                        sx={{ gap: 1, alignItems: "center" }}
                      >
                        <CircleIcon
                          fontSize="small"
                          sx={{ color: "#FFB672" }}
                        />
                        <Typography>Apricot</Typography>
                      </Stack>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <Stack
                        direction={"row"}
                        sx={{ gap: 1, alignItems: "center" }}
                      >
                        <CircleIcon
                          fontSize="small"
                          sx={{ color: "#242B33" }}
                        />
                        <Typography>Black</Typography>
                      </Stack>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <Stack
                        direction={"row"}
                        sx={{ gap: 1, alignItems: "center" }}
                      >
                        <CircleIcon
                          fontSize="small"
                          sx={{ 
                            backgroundImage: 'linear-gradient(90deg, #242B33, #D7D7D7)',
                            borderRadius:'50%',
                            color: 'transparent'
                        }}
                        />
                        <Typography>Black & White</Typography>
                      </Stack>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <Stack
                        direction={"row"}
                        sx={{ gap: 1, alignItems: "center" }}
                      >
                        <CircleIcon
                          fontSize="small"
                          sx={{ color: "#CECECE" }}
                        />
                        <Typography>Silver</Typography>
                      </Stack>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <Stack
                        direction={"row"}
                        sx={{ gap: 1, alignItems: "center" }}
                      >
                        <CircleIcon
                          fontSize="small"
                          sx={{ color: "#FFF7CE" }}
                        />
                        <Typography>Tan</Typography>
                      </Stack>
                    }
                  />
                </FormGroup>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h7"
                  sx={{
                    color: "#003459",
                    fontWeight: "bold",
                  }}
                >
                  Price
                </Typography>
                <Stack direction={"row"} sx={{ gap: 1 }}>
                  <FormControl sx={{ width: "45%" }}>
                    <InputLabel>min</InputLabel>
                    <Select value={min} label="min" onChange={handleChange}>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ width: "45%" }}>
                    <InputLabel>max</InputLabel>
                    <Select value={max} label="max" onChange={handleChange}>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h7"
                  sx={{
                    color: "#003459",
                    fontWeight: "bold",
                  }}
                >
                  Breed
                </Typography>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Small" />
                  <FormControlLabel control={<Checkbox />} label="Medium" />
                  <FormControlLabel control={<Checkbox />} label="Large" />
                </FormGroup>
              </Box>
            </Stack>
          </Grid>
        </Hidden>
        <Grid xs={12} md={9}>
          <Box sx={{ pt: 6 }}>
            <Box>
              <Stack
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                }}
              >
                <Stack direction={"row"} sx={{ gap: 2 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#003459",
                      fontWeight: "bold",
                      mb: { xs: 2, md: 0 },
                    }}
                  >
                    Small Dog
                  </Typography>
                  <Typography variant="h6"> 52 puppies</Typography>
                </Stack>
                <Button
                  variant="outlined"
                  sx={{
                    border: "1px solid #003459",
                    color: "#003459",
                    borderRadius: 30,
                    width: { xs: "100%", md: "auto" },
                    mt: { xs: 2, md: 0 },
                    textTransform: "none",
                  }}
                >
                  Sort by: Popular
                </Button>
              </Stack>
              <Box sx={{ flexGrow: 1, pt: 5 }}>
                <Grid container spacing={2}>
                  {list.map((pet, index) => (
                    <>
                      <Grid item xs={6} md={4} lg={4}>
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
                                    style={{
                                      color: "#667479",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {pet.gene}
                                  </span>
                                </Typography>
                                <Typography sx={{ fontSize: "12px" }}>
                                  <span style={{ color: "gray" }}>Age:</span>{" "}
                                  <span
                                    style={{
                                      color: "#667479",
                                      fontWeight: "bold",
                                    }}
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
              <Stack
                spacing={2}
                direction={"row"}
                sx={{
                  justifyContent: "center",
                  pt: 3,
                  pb: 6,
                }}
              >
                <Pagination count={10} color="primary" />
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ListPets;
