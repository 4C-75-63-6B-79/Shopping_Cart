import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onHomePageLinkClickedHandler }) => {
    return (
        <nav>
            <ul className="navlinks">
                <li><Link to="/" onClick={onHomePageLinkClickedHandler} style={{ textDecoration: "none" }}>Home</Link></li>
                <li><Link to="/products" style={{ textDecoration: "none" }}>Products</Link></li>
                <li><Link to="/cart" style={{ textDecoration: "none" }}>Cart</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;