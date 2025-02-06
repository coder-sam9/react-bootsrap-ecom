import React from "react";
import { Container } from "react-bootstrap";
import Products from "../components/Products";

function Store() {
  const productsArr = [
    [
      {
        title: "Colors",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        otherImages: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Phoenicopterus_ruber_in_M%C3%A1lagh_Bay.jpg/1280px-Phoenicopterus_ruber_in_M%C3%A1lagh_Bay.jpg", // Flamingo
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Colourful_umbrellas_in_the_sky_of_Agueda_%28Portugal%29.jpg/1280px-Colourful_umbrellas_in_the_sky_of_Agueda_%28Portugal%29.jpg", // Umbrellas
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Autumn_leaves_in_the_Arboretum_de_La_Foux.JPG/1280px-Autumn_leaves_in_the_Arboretum_de_La_Foux.JPG", // Autumn leaves
        ],
        reviews: [
          { user: "John Doe", rating: 5, comment: "Excellent product!" },
          {
            user: "Jane Smith",
            rating: 4,
            comment: "Good quality, but a bit pricey.",
          },
          {
            user: "Peter Jones",
            rating: 3,
            comment: "Decent. Could be better.",
          },
        ],
      },
      {
        title: "Black and white",
        price: 50,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        otherImages: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Black_and_white_cat_portrait.jpg/1280px-Black_and_white_cat_portrait.jpg", // Cat
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Monochrome_photo_of_Eiffel_Tower.jpg/1280px-Monochrome_photo_of_Eiffel_Tower.jpg", // Eiffel Tower
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/London_Black_and_White_HDR.jpg/1280px-London_Black_and_White_HDR.jpg", // London
        ],
        reviews: [
          { user: "Alice Johnson", rating: 4, comment: "Love the simplicity." },
          { user: "Bob Williams", rating: 5, comment: "Perfect for my needs." },
        ],
      },
      {
        title: "Yellow and Black",
        price: 70,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        otherImages: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Male_tiger_sitting.jpg/1280px-Male_tiger_sitting.jpg", // Tiger
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Black_and_yellow_butterfly.JPG/1280px-Black_and_yellow_butterfly.JPG", // Butterfly
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bee_on_sunflower_arp.jpg/1280px-Bee_on_sunflower_arp.jpg", // Bee
        ],
        reviews: [], // No reviews yet
      },
      {
        title: "Blue Color",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        otherImages: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Deep_blue_sky.jpg/1280px-Deep_blue_sky.jpg", // Sky
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Blue_Peafowl_%28Pavo_cristatus%29_female_Umbrella_Falls_Kodaikanal_India.jpg/1280px-Blue_Peafowl_%28Pavo_cristatus%29_female_Umbrella_Falls_Kodaikanal_India.jpg", // Peafowl
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Blue_planet_from_space.jpg/1280px-Blue_planet_from_space.jpg", // Earth
        ],
        reviews: [{ user: "Eve Davis", rating: 5, comment: "Amazing color!" }],
      },
    ],
    [
      {
        title: "Colors",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        otherImages: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Phoenicopterus_ruber_in_M%C3%A1lagh_Bay.jpg/1280px-Phoenicopterus_ruber_in_M%C3%A1lagh_Bay.jpg", // Flamingo
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Colourful_umbrellas_in_the_sky_of_Agueda_%28Portugal%29.jpg/1280px-Colourful_umbrellas_in_the_sky_of_Agueda_%28Portugal%29.jpg", // Umbrellas
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Autumn_leaves_in_the_Arboretum_de_La_Foux.JPG/1280px-Autumn_leaves_in_the_Arboretum_de_La_Foux.JPG", // Autumn leaves
        ],
        reviews: [
          { user: "John Doe", rating: 5, comment: "Excellent product!" },
          {
            user: "Jane Smith",
            rating: 4,
            comment: "Good quality, but a bit pricey.",
          },
          {
            user: "Peter Jones",
            rating: 3,
            comment: "Decent. Could be better.",
          },
        ],
      },
      {
        title: "Black and white",
        price: 50,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        otherImages: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Black_and_white_cat_portrait.jpg/1280px-Black_and_white_cat_portrait.jpg", // Cat
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Monochrome_photo_of_Eiffel_Tower.jpg/1280px-Monochrome_photo_of_Eiffel_Tower.jpg", // Eiffel Tower
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/London_Black_and_White_HDR.jpg/1280px-London_Black_and_White_HDR.jpg", // London
        ],
        reviews: [
          { user: "Alice Johnson", rating: 4, comment: "Love the simplicity." },
          { user: "Bob Williams", rating: 5, comment: "Perfect for my needs." },
        ],
      },
      {
        title: "Yellow and Black",
        price: 70,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        otherImages: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Male_tiger_sitting.jpg/1280px-Male_tiger_sitting.jpg", // Tiger
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Black_and_yellow_butterfly.JPG/1280px-Black_and_yellow_butterfly.JPG", // Butterfly
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bee_on_sunflower_arp.jpg/1280px-Bee_on_sunflower_arp.jpg", // Bee
        ],
        reviews: [], // No reviews yet
      },
      {
        title: "Blue Color",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        otherImages: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Deep_blue_sky.jpg/1280px-Deep_blue_sky.jpg", // Sky
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Blue_Peafowl_%28Pavo_cristatus%29_female_Umbrella_Falls_Kodaikanal_India.jpg/1280px-Blue_Peafowl_%28Pavo_cristatus%29_female_Umbrella_Falls_Kodaikanal_India.jpg", // Peafowl
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Blue_planet_from_space.jpg/1280px-Blue_planet_from_space.jpg", // Earth
        ],
        reviews: [{ user: "Eve Davis", rating: 5, comment: "Amazing color!" }],
      },
    ],
    // ... (rest of your products)
  ];

  console.table(productsArr[0]);
  return (
    <Container className="text-center  w-50">
      <Products productArr={productsArr[0]} heading={"Album1"} />
      <Products productArr={productsArr[1]} heading={"Album2"} />
    </Container>
  );
}

export default Store;
