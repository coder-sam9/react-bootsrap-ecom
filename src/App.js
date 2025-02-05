import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./Pages/About";  // Create this page
import Store from "./Pages/Store";  // Create this page
import Home from "./Pages/Home";    // Create this page
import CartToast from "./components/CartToster";
import CartTopUp from "./Pages/CartTopUp";
import { useState } from "react";

function App() {
  const [showCart,setShowcart]=useState(false);

  return (
    <Router>
      <div fluid>
        <header>

        <Header onOpen={()=>setShowcart(true)} />
        </header>
        <main style={{height:'100vh'}}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store/>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
<CartToast/>
{showCart && <CartTopUp onClose={()=>setShowcart(false)}/>}
        </main>
      </div>
    </Router>
  );
}

export default App;
