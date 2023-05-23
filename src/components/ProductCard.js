import React from "react";

export default function ProductCard({ productInfo }) {
    return (
        <>
            <div className="productCard">
                <h2>{productInfo.title}</h2>
                <h3>{productInfo.price}</h3>
                <p>{productInfo.description}</p>
            </div>
        </>
    );
}