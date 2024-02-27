import React from "react";
import Box from "@mui/material/Box";
import Hero from "../components/Hero";
import ListPets from "../components/ListPets";
const petss = [
  {
    image: "/image 1.png",
    title: "MO231 - Pomeranian White",
    gene: "male",
    age: "02 months",
  },
  {
    image: "/image 2.png",
    title: "MO502 - Poodle Tiny Yellow",
    gene: "male",
    age: "02 months",
  },
  {
    image: "/image 3.png",
    title: "MO102 - Poodle Tiny Sepia",
    gene: "male",
    age: "02 months",
  },
  {
    image: "/image 4.png",
    title: "MO512 - Alaskan Malamute Grey",
    gene: "male",
    age: "02 months",
  },
  {
    image: "/image 5.png",
    title: "MO231 - Pembroke Corgi Cream",
    gene: "male",
    age: "02 months",
  },
  {
    image: "/image 6.png",
    title: "MO502 - Pembroke Corgi Tricolor",
    gene: "male",
    age: "02 months",
  },
  {
    image: "/image 7.png",
    title: "MO231 - Pomeranian White",
    gene: "male",
    age: "02 months",
  },
  {
    image: "/image 8.png",
    title: "MO512 - Poodle Tiny Dairy Cow",
    gene: "male",
    age: "02 months",
  },
];
const productss = [
  {
    image: "/produk1.png",
    title: "MO231 - Pomeranian White",
    gene: "male",
    age: "02 months",
  },
  {
    image: "/produk2.png",
    title: "MO502 - Poodle Tiny Yellow",
    gene: "male",
    age: "02 months",
  },
  {
    image: "/produk3.png",
    title: "MO102 - Poodle Tiny Sepia",
    gene: "male",
    age: "02 months",
  },
  {
    image: "/produk4.png",
    title: "MO512 - Alaskan Malamute Grey",
    gene: "male",
    age: "02 months",
  },
  {
    image: "/produk5.png",
    title: "MO231 - Pembroke Corgi Cream",
    gene: "male",
    age: "02 months",
  },
  {
    image: "/produk6.png",
    title: "MO502 - Pembroke Corgi Tricolor",
    gene: "male",
    age: "02 months",
  },
  {
    image: "/produk7.png",
    title: "MO231 - Pomeranian White",
    gene: "male",
    age: "02 months",
  },
  {
    image: "/produk8.png",
    title: "MO512 - Poodle Tiny Dairy Cow",
    gene: "male",
    age: "02 months",
  },
];
const LandingPage = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          p: 2,
          bgcolor: "#FCEED5",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        <Hero></Hero>
      </Box>
      <Box sx={{ height: "auto" }}>
        <ListPets list={petss}></ListPets>
      </Box>
      <Box sx={{ height: "auto" }}>
        <ListPets list={productss}></ListPets>
      </Box>
    </>
  );
};

export default LandingPage;
