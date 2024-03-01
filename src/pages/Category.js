import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import HeroCategory from "../components/HeroCategory";
import ListCategory from "../components/ListCategory";
const Category = () => {
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
  return (
    <>
      <Container maxWidth="lg" sx={{ pt: 12 }}>
        <Box
          component="section"
          sx={{
            position: "relative",
            borderRadius: 7,
            bgcolor: "#FCEED5",
            backgroundImage: `url(/herocategory.png)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            backgroundSize: "70%",
          }}
        >
          <HeroCategory></HeroCategory>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <ListCategory list={petss}></ListCategory>
      </Container>
    </>
  );
};

export default Category;
