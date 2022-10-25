import "./App.css";

import React from "react";

import NavBar from "./component/navbar/navbar";
import Home from "./component/home";
import Product from "./component/product";
import Signup from "./component/signup";
import Login from "./component/login";
import Shop from "./component/shop";
import Cart from "./component/cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,/////it is 'a' anchor tag
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />

      {/* {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        {/* <Route path="/about" element={ <About /> } /> */}
        <Route path="/product" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />   
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/signup" element={ <Signup /> } /> */}
      </Routes> 
    </Router>
   
  );
}

export default App;