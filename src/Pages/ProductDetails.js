import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Card, ListGroup } from "react-bootstrap";

// Sample data (flattened)
const productsArr = [
    [
      {
        title: "Colors",
        price: 100,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        otherImages: [
          "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg", // Colorful flowers
          "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg", // Rainbow
          "https://images.pexels.com/photos/1144691/pexels-photo-1144691.jpeg", // Colorful lights
        ],
        reviews: [
          { user: "John Doe", rating: 5, comment: "Excellent product!" },
          { user: "Jane Smith", rating: 4, comment: "Good quality, but a bit pricey." },
          { user: "Peter Jones", rating: 3, comment: "Decent. Could be better." },
        ],
      },
      {
        title: "Black and white",
        price: 50,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        otherImages: [
          "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg", // Black and white landscape
          "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg", // Black and white tree
          "https://images.pexels.com/photos/34950/pexels-photo.jpg", // Black and white road
        ],
        reviews: [
          { user: "Alice Johnson", rating: 4, comment: "Love the simplicity." },
          { user: "Bob Williams", rating: 5, comment: "Perfect for my needs." },
        ],
      },
      {
        title: "Yellow and Black",
        price: 70,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        otherImages: [
          "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg", // Yellow and black butterfly
          "https://images.pexels.com/photos/1624076/pexels-photo-1624076.jpeg", // Yellow and black bee
          "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg", // Yellow and black sunflower
        ],
        reviews: [], // No reviews yet
      },
      {
        title: "Blue Color",
        price: 100,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        otherImages: [
          "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg", // Blue ocean
          "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg", // Blue sky
          "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg", // Blue peacock
        ],
        reviews: [{ user: "Eve Davis", rating: 5, comment: "Amazing color!" }],
      },
    ],
    [
      {
        title: "Colors",
        price: 100,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        otherImages: [
          "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg", // Colorful flowers
          "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg", // Rainbow
          "https://images.pexels.com/photos/1144691/pexels-photo-1144691.jpeg", // Colorful lights
        ],
        reviews: [
          { user: "John Doe", rating: 5, comment: "Excellent product!" },
          { user: "Jane Smith", rating: 4, comment: "Good quality, but a bit pricey." },
          { user: "Peter Jones", rating: 3, comment: "Decent. Could be better." },
        ],
      },
      {
        title: "Black and white",
        price: 50,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        otherImages: [
          "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg", // Black and white landscape
          "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg", // Black and white tree
          "https://images.pexels.com/photos/34950/pexels-photo.jpg", // Black and white road
        ],
        reviews: [
          { user: "Alice Johnson", rating: 4, comment: "Love the simplicity." },
          { user: "Bob Williams", rating: 5, comment: "Perfect for my needs." },
        ],
      },
      {
        title: "Yellow and Black",
        price: 70,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        otherImages: [
          "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg", // Yellow and black butterfly
          "https://images.pexels.com/photos/1624076/pexels-photo-1624076.jpeg", // Yellow and black bee
          "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg", // Yellow and black sunflower
        ],
        reviews: [], // No reviews yet
      },
      {
        title: "Blue Color",
        price: 100,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        otherImages: [
          "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg", // Blue ocean
          "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg", // Blue sky
          "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg", // Blue peacock
        ],
        reviews: [{ user: "Eve Davis", rating: 5, comment: "Amazing color!" }],
      },
    ],
  ];
  

// Flatten the nested array
const products = productsArr.flat();

function ProductDetails() {
  // Get the product title from the URL
  const { title } = useParams();

  // Find the product by title
  const product = products.find((p) => p.title === title);

  // Handle case where product is not found
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <Container className="my-4">
      <Row>
        {/* Product Images */}
        <Col md={6}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>

          {/* Main Image */}
          <Image src={product.imageUrl} fluid rounded className="mb-3" />

          {/* Other Images */}
          <Row>
            {product.otherImages.map((image, index) => (
              <Col key={index} xs={12} md={6} className="mb-3">
                <Image src={image} fluid rounded />
              </Col>
            ))}
          </Row>
        </Col>

        {/* Product Reviews */}
        <Col md={6}>
          <Card>
            <Card.Header>Reviews</Card.Header>
            <Card.Body>
              {product.reviews.length > 0 ? (
                <ListGroup variant="flush">
                  {product.reviews.map((review, index) => (
                    <ListGroup.Item key={index}>
                      <strong>{review.user}</strong> - {review.comment}
                      <br />
                      <small>Rating: {review.rating}/5</small>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p>No reviews yet.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;