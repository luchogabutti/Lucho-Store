import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Products = () => {
    return (
        <div className="style">
            <p>This is Products Page</p>
            <Link to='/'>Go to Home Page</Link>
        </div>
    )
}

export default Products;