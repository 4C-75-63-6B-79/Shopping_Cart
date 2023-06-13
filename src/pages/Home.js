import React, { useState } from "react";

const Home = ({ productData }) => {
    

    return (
        <>
            <h2>Home</h2>
            <h3>{productData.error ? productData.error : productData.title}</h3>
            <img src={productData.image} alt={productData.title}/>
        </>        
    );
};

export default Home;