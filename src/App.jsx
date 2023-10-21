// import { useState } from 'react'
import {  Routes, Route } from 'react-router-dom';
import './App.css'
import axios from 'axios';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Navbar from './Components/Navbar';
import ProductDetails from './Pages/ProductDetails';
import PageNotFoundErrorPage from './Pages/PageNotFoundErrorPage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import { useEffect, useState } from 'react';
import UserAuthContex from './Context/UserAuthContex';
import LoginPage from './Pages/LoginPage';
import AddCart from './Pages/AddCart';


import Checkout from './Pages/Checkout';
import PrivateRoutes from './Pages/PrivateRoutes';



function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };


 
  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }


    fetchData();
  }, []);

 

  return (
    <>
    <UserAuthContex>

        
        <Navbar onSearch={handleSearch}/>
    <Routes>
      
        
          <Route path="/" element={< Home />} />
          <Route path="/about" element={<About/>} />
          <Route  path="/products/:category?" element={<Products productcard={products} searchQuery={searchQuery}/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product-details/:id" element={<ProductDetails/>} />
          <Route path="/not-found" element={<PageNotFoundErrorPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route  element={<PrivateRoutes/>}>

          <Route path="/checkout" element={<Checkout/>} />
          </Route>
          <Route path="/cart" element={<AddCart/>} />
          
          
        
     
    </Routes>
    </UserAuthContex>
     
    </>
  )
}

export default App
