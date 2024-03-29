import React from "react";

const Home = ({ productData }) => {
    

    return (
        <>
            <h2>Home</h2>
            <h3>{productData["loading"]=== true ? "Loading..." : productData.error ? productData.error : productData.title}</h3>
            {productData.error ? null : <img src={productData.image} alt={productData.title}/>}
        </>        
    );
};

export default Home;