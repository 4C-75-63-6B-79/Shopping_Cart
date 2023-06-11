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
  const [productsInCart, setProductsInCart] = useState({});
  const [numberOfProductsInCart, setNumberOfProductsInCart] = useState(0);
 
  function initalInitOfHomePageProductData() {
    getProductData(getRandomNumberInRange()).then((data) => setHomePageProductData(data)).catch((error) => setHomePageProductData({ error: "Something went wrong try refreshing the page again." }));
    return "";
  }

  function initProductsData() {
    getAllProductsData().then((data) => {
      const preProcessedData = data.map((element) => {
        return {
          ...element,
          "inCart": false,
          "quantity": 0
        };
      });
      setAllProductsData(preProcessedData);
    }).catch((error) =>setAllProductsData({ error: "Something went wrong try refreshing the page again." }));
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

  function addToCartButtonClickHandler(product) {
    const updatedAllProductData = {
      ...allProductsData,
      [product.title]: {
        ...product,
        "inCart": true,
        "quantity": product.quantity
      }
    }; 
    updateNumberOfItemsInCart(updatedAllProductData);
    setAllProductsData(updatedAllProductData);
    setProductsInCart(() => {
      return {
        ...productsInCart,
        [product.title]: {
          ...product,
          "quantity" : product.quantity,
        } 
      };
    });
  }

  function updateNumberOfItemsInCart(updatedAllProductData) {
    setNumberOfProductsInCart(() => {
      return Object.entries(updatedAllProductData).reduce((accumulator, [title, productInfo]) => Number(productInfo["quantity"]) + accumulator , 0);
    });
  }

  function deleteFromCartButtonClickHandler(product) {
    const updatedProductsInCart = productsInCart;
    const updatedAllProductData = {
      ...allProductsData,
      [product.title]: {
        ...product,
        "inCart": false,
        "quantity": 0
      }
    };
    const quantityOfProduct = product.quantity;
    delete updatedProductsInCart[product.title];
    setProductsInCart(updatedProductsInCart);
    setAllProductsData(updatedAllProductData);
    setNumberOfProductsInCart(() => numberOfProductsInCart - quantityOfProduct);
  }

  return (
    <BrowserRouter>
      <div className="shopping-app">
        <header>
          <h1>Shopping Thing</h1>
        </header>
        <Navbar onHomePageLinkClickedHandler={onHomePageLinkClicked} numberOfProductsInCart={numberOfProductsInCart}/>
      </div>
      <Routes>
        <Route path="/" exact element={<Home productData ={homePageProductData}/>} />
        <Route path="/products" element={<Products addToCartButtonClickHandler={addToCartButtonClickHandler} productsData = {allProductsData}/>} />
        <Route path="/cart" element={<Cart deleteFromCartButtonClickHandler={deleteFromCartButtonClickHandler} productsInCart={productsInCart}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default ShoppingApp;
