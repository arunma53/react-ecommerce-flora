import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductContextData from "./ProductContext";
import ProductListing from './ProductListing';
import CartPage from './components/cart/cart';

function App() {
 

  return (
    <>
      <div className="container">
        <ProductContextData>
        <Router>
         <Routes>
            <Route path ="/" element={<ProductListing/>}/>
            <Route path="/cart" element={<CartPage />} />
         </Routes>
       </Router>
        </ProductContextData>

        
        <footer className="App-footer ">
      
        </footer>
     
       
      </div>
    </>
  );
}


export default App;
