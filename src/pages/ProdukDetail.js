import React from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import ProfilePet from "../components/ProfilePet";
import Customer from "../components/Customer";

const ProdukDetail = () => {
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

  let { id } = useParams();
  const selectedPet = petss[id];
  return (
    <>
      <Container maxWidth="lg" sx={{ pt: 12 }}>
        <ProfilePet pet={selectedPet}></ProfilePet>
        <Customer></Customer>
      </Container>
    </>
  );
};

export default ProdukDetail;
