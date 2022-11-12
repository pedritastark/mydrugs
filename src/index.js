import React from 'react';
import ReactDOM from 'react-dom/client';

import {DashBoard} from './pages/dashboard/Dashboard.jsx';
import {Authentication} from './pages/authentication/Authentication.jsx';
import {Welcome} from './pages/welcome/Welcome.jsx';
import {Product} from './pages/product/Product.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react'
import ScrollToTop from './pages/ScrollToTop.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>

        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="/dashboard" element={<DashBoard />}/>
          <Route path="/auth" element={<Authentication />}/>
          <Route path="/product/:productId" element={<Product />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>

);
