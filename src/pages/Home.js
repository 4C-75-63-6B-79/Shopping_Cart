import React, { useState } from "react";

const Home = ({ productData }) => {
    

    return (
        <>
            <h2>Home</h2>
            <h3>{productData.title}</h3>
        </>        
    );
};

export default Home;