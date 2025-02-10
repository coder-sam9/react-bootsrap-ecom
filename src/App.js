import {  BrowserRouter, Route, Routes,Redirect, Navigate, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./Pages/About";  // Create this page
import Store from "./Pages/Store";  // Create this page
import Home from "./Pages/Home";    // Create this page
import CartToast from "./components/CartToster";
import CartTopUp from "./Pages/CartTopUp";
import { useState } from "react";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";
import { Container } from "react-bootstrap";
import NotFoundPage from "./Pages/NotFoundPage";
import Login from "./Pages/Login";

const ProtectedRoute=({isLogged})=>{
  if (isLogged) {
   return  <Outlet/>
  } else {
   return <Navigate to="/login" replace />;
  }
}
function App() {
  const [showCart,setShowcart]=useState(false);
  const userData=JSON.parse(localStorage.getItem('ecom-user'));

  return (
    <BrowserRouter>
      <div fluid>
        <header>
{!!userData?.idToken&& 
        <Header onOpen={()=>setShowcart(true)} />}
        </header>
        <main style={{height:'100vh'}}>

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace/>}  />
            {/* Define your routes */}
            <Route element={<ProtectedRoute isLogged={!!userData?.idToken}/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path="/store" element={<Store/>} />
          <Route path="/store/:title" element={<ProductDetails/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
            </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {!!userData?.idToken &&
        
        <Footer />
        }
<CartToast/>
{showCart && <CartTopUp onClose={()=>setShowcart(false)}/>}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
