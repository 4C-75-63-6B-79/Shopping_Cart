import "./Shopping_App.css";

import React , { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { getAllProductsData, getProductData } from "./modules/Get_Data";
import { getRandomNumberInRange } from "./modules/helper_functions";

function ShoppingApp() {

  const [homePageProductData, setHomePageProductData] = useState(initalInitOfHomePageProductData);
  const [allProductsData, setAllProductsData] = useState(initProductsData);

  function initalInitOfHomePageProductData() {
    getProductData(getRandomNumberInRange()).then((data) => setHomePageProductData(data));
    return "";
  }

  function initProductsData() {
    getAllProductsData().then((data) => setAllProductsData(data));
    return "";
  }

  function onHomePageLinkClicked() {
    if(allProductsData !== "") {
      setHomePageProductData(() => allProductsData[getRandomNumberInRange()]);
    }
  }

  function onProductsPageLinkClicked() {
    console.log("products page link clicked");
  }

  function onCartPageLinkClicked() {
    console.log("cart page link clicked");
  }

  return (
    <BrowserRouter>
      <div className="shopping-app">
        <header>
          <h1>Shopping Thing</h1>
        </header>
        <Navbar onHomePageLinkClickedHandler={onHomePageLinkClicked}/>
      </div>
      <Routes>
        <Route path="/" exact element={<Home productData ={homePageProductData}/>} />
        <Route path="/products" element={<Products productsData = {allProductsData}/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ShoppingApp;
