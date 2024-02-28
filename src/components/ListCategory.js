import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
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
const ListPets = ({ list }) => {
  const [min, setMin] = React.useState("");
  const [max, setMax] = React.useState("");

  const handleChange = (event) => {
    setMin(event.target.value);
    setMax(event.target.value);
  };
  return (
    <>
      <Grid container spacing={2} sx={{ flexGrow: 1, gap: 0 }}>
        <Grid xs={4}>
          <Box sx={{ pt: 8 }}>
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
                <FormControlLabel control={<Checkbox />} label="Red" />
                <FormControlLabel control={<Checkbox />} label="Apricot" />
                <FormControlLabel control={<Checkbox />} label="Black" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Black & White"
                />
                <FormControlLabel control={<Checkbox />} label="Silver" />
                <FormControlLabel control={<Checkbox />} label="Tan" />
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
        <Grid xs={8}>
          <Box sx={{ pt: 8 }}>
            <Box>
              <Stack
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: { xs: "column", md: "row" },
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
                  }}
                >
                  View More
                </Button>
              </Stack>
              <Box sx={{ flexGrow: 1, pt: 3 }}>
                <Grid container spacing={2}>
                  {list.map((pet, index) => (
                    <>
                      <Grid item xs={6} md={4} lg={4}>
                        <Box
                          sx={{
                            textAlign: "center",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            borderRadius: 2,
                            pb: 3,
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
                              sx={{ fontWeight: "bold", color: "black" }}
                            >
                              {pet.title}
                            </Typography>
                            <Stack spacing={2} direction="row">
                              <Typography>Gene: {pet.gene}</Typography>
                              <Typography>Age: {pet.age}</Typography>
                            </Stack>
                            <Typography
                              sx={{ fontWeight: "bold", color: "black" }}
                            >
                              6.900.000 VND
                            </Typography>
                          </Box>
                        </Box>
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
                  pt:3
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
