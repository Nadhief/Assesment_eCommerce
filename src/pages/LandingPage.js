import React from "react";
import Box from "@mui/material/Box";
import Hero from "../components/Hero";
import ListPets from "../components/ListPets";
import HeroExplore from "../components/HeroExplore";
import Container from "@mui/material/Container";
import HeroAdoption from "../components/HeroAdoption";
import Sponsor from "../components/Sponsor";
import Knowledge from "../components/Knowledge";
import Hidden from "@mui/material/Hidden";
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
const knowledgess = [
  {
    image: "/knowledge1.png",
    title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
    deskripsi:
      "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
    badge: "Pet Knowledge",
  },
  {
    image: "/knowledge2.png",
    title: "Dog Diet You Need To Know",
    deskripsi:
      "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
    badge: "Pet Knowledge",
  },
  {
    image: "/knowledge3.png",
    title:
      "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
    deskripsi:
      "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
    badge: "Pet Knowledge",
  },
];
const LandingPage = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          bgcolor: "#FCEED5",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        <Hero></Hero>
      </Box>
      <Box>
        <ListPets list={petss}></ListPets>
      </Box>
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Box
          component="section"
          sx={{
            bgcolor: "#FCEED5",
            borderRadius: 7,
          }}
        >
          <HeroExplore></HeroExplore>
        </Box>
      </Container>
      <Hidden lgDown>
        <Box>
          <ListPets list={productss}></ListPets>
        </Box>
      </Hidden>
      <Hidden lgDown>
        <Container maxWidth="lg" sx={{ pt: 8 }}>
          <Sponsor></Sponsor>
        </Container>
      </Hidden>
      <Hidden lgDown>
        <Container maxWidth="lg" sx={{ pt: 8 }}>
          <Box
            component="section"
            sx={{
              // p: 2,
              bgcolor: "#FCEED5",
              borderRadius: 7,
              // border: '1px solid red'
            }}
          >
            <HeroAdoption></HeroAdoption>
          </Box>
        </Container>
      </Hidden>
      <Container maxWidth="lg" sx={{ pt: 8, mb:5 }}>
        <Box>
          <Knowledge list={knowledgess}></Knowledge>
        </Box>
      </Container>
    </>
  );
};

export default LandingPage;
