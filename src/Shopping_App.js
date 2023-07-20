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
  const [categoryProductData, setCategoryProductData] = useState(false);
  const [numberOfProductsInCart, setNumberOfProductsInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
 
  function initalInitOfHomePageProductData() {
    getProductData(getRandomNumberInRange()).then((data) => setHomePageProductData(data)).catch((error) => setHomePageProductData({ error: "Something went wrong try refreshing the page again." }));
    return { "loading": true };
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
    return { "loading": true };
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
      [product.id-1]: {
        ...product,
        "inCart": true,
        "quantity": product.quantity
      }
    }; 
    updateNumberOfItemsInCart(updatedAllProductData);
    setAllProductsData(updatedAllProductData);
    updateTotalCartPrice(updatedAllProductData);
  }

  function updateNumberOfItemsInCart(updatedAllProductData) {
    setNumberOfProductsInCart(() => {
      return Object.entries(updatedAllProductData).reduce((accumulator, [id, productInfo]) => Number(productInfo["quantity"]) + accumulator , 0);
    });
  }

  function updateTotalCartPrice(updatedAllProductData) {
    setTotalPrice(Object.entries(updatedAllProductData).reduce((accumulator, [id, productInfo]) => Number(productInfo["inCart"]) ? Number(productInfo["quantity"]) * Number(productInfo["price"]) + accumulator : accumulator + 0, 0)); 
  } 

  function deleteFromCartButtonClickHandler(product) {
    const updatedAllProductData = {
      ...allProductsData,
      [product.id-1]: {
        ...product,
        "inCart": false,
        "quantity": 0
      }
    };
    const quantityOfProduct = product.quantity;
    setAllProductsData(updatedAllProductData);
    setNumberOfProductsInCart(() => numberOfProductsInCart - quantityOfProduct);
    updateTotalCartPrice(updatedAllProductData);
  }

  function increaseItemQuantityInCartClickHandler(product) {
    const updatedAllProductData = {
      ...allProductsData,
      [product.id-1]: {
        ...product,
        "quantity": product.quantity === 10 ? 10 : Number(product.quantity) + 1
      }
    };
    setAllProductsData(updatedAllProductData);
    updateNumberOfItemsInCart(updatedAllProductData);
    updateTotalCartPrice(updatedAllProductData);
  }

  function decreaseItemQuantityInCartClickHandler(product) {
    const updatedAllProductData = {
      ...allProductsData,
      [product.id-1]: {
        ...product,
        "quantity": product.quantity === 1 ? 1 : Number(product.quantity) - 1
      }
    };
    setAllProductsData(updatedAllProductData);
    updateNumberOfItemsInCart(updatedAllProductData);
    updateTotalCartPrice(updatedAllProductData);
  }

  function sortByProductCategoryButtonClicked(category) {
    updateCategoryProductData(allProductsData, category);
  }

  function updateCategoryProductData(productsData, category) {
    if(category === "all") {
      setCategoryProductData(false);
      return ;
    }
    console.log(category);
    const updateCategoryProductData = productsData.filter((productData) => productData["category"] === category);
    setCategoryProductData(updateCategoryProductData);
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
        <Route path="/products" element={<Products addToCartButtonClickHandler={addToCartButtonClickHandler} allProductsData = {categoryProductData || allProductsData} categoryOnChangeHandler={sortByProductCategoryButtonClicked}/>} />
        <Route path="/cart" element={<Cart deleteFromCartButtonClickHandler={deleteFromCartButtonClickHandler} increaseItemQuantityInCartClickHandler={increaseItemQuantityInCartClickHandler} decreaseItemQuantityInCartClickHandler={decreaseItemQuantityInCartClickHandler} allProductsData={allProductsData} totalPrice={totalPrice}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default ShoppingApp;
