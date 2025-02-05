import React from 'react'
import { Container } from 'react-bootstrap';
import Products from '../components/Products';

function Store() {
  const productsArr = [
    [
      { title: "Colors", price: 100, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png" },
      { title: "Black and white", price: 50, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png" },
      { title: "Yellow and Black", price: 70, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png" },
      { title: "Blue Color", price: 100, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png" }
    ],
    [
      { title: "Colors", price: 100, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png" },
      { title: "Black and white", price: 50, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png" },
      { title: "Yellow and Black", price: 70, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png" },
      { title: "Blue Color", price: 100, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png" }
    ]
  ];
  console.table(productsArr[0])
  return (
    <Container className="text-center  w-50">
      <Products productArr={productsArr[0]} heading={"Album1"} />
      <Products productArr={productsArr[1]} heading={"Album2"} />
    </Container>
  )
}

export default Store