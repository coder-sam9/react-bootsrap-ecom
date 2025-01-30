import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
    
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">The Generics</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Store</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            </ul>
            <button className="btn btn-outline-light ms-3">Cart (0)</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-secondary text-white text-center py-5">
        <h1 className="display-4">The Generics</h1>
      </header>

      {/* Music Section */}
      <div className="container text-center my-5">
        <h2 className="fw-bold">MUSIC</h2>
        <div className="row">
          <div className="col-md-6">
            <h5>{productsArr[0].title}</h5>
            <img src={productsArr[0].imageUrl} alt="Album 1" className="img-fluid"/>
            <p>${productsArr[0].price}</p>
            <button className="btn btn-primary">ADD TO CART</button>
          </div>
          <div className="col-md-6">
            <h5>{productsArr[1].title}</h5>
            <img src={productsArr[1].imageUrl} alt="Album 2" className="img-fluid"/>
            <p>${productsArr[1].price}</p>
            <button className="btn btn-primary">ADD TO CART</button>
          </div>
        </div>
      </div>

      {/* Merch Section */}
      <div className="container text-center my-5">
        <h2 className="fw-bold">MERCH</h2>
        <div className="row">
          <div className="col-md-6">
            <h5>T{productsArr[2].title}</h5>
            <img src={productsArr[2].imageUrl} alt="T-Shirt" className="img-fluid"/>
            <p>${productsArr[2].price}</p>
            <button className="btn btn-primary">ADD TO CART</button>
          </div>
          <div className="col-md-6">
            <h5>{productsArr[3].title}</h5>
            <img src={productsArr[3].imageUrl} alt="Coffee Cup" className="img-fluid"/>
            <p>${productsArr[3].price}</p>
            <button className="btn btn-primary">ADD TO CART</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-info text-white text-center py-3">
        <h3>The Generics</h3>
        <div>
          <a href="#" className="me-3"><i className="fab fa-youtube"></i></a>
          <a href="#" className="me-3"><i className="fab fa-spotify"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
        </div>
      </footer>
    </div>
  );
};

export default App;
