import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Corousel from "./Corousel";

const ProfilePet = (pet) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
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
        <Box sx={{ flexGrow: 1, border: "1px solid black" }}>
          <Stack direction={"row"} sx={{ border: "1px solid black" }}>
            <Stack width={"50%"}>
              <img
                src={pet.pet.image}
                loading="lazy"
                style={{
                  borderRadius: 10,
                  objectFit: "cover",
                  width: "100%",
                  height:'476px'
                }}
              />
              <Corousel></Corousel>
            </Stack>
            <Stack width={"50%"}>hai</Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ProfilePet;
