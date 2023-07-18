import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Home = () => {
    return (
        <div className="style">
            <p>This is Home Page</p>
            <Link to='/products'>Go to Products Page</Link>
       </div>
    )
}

export default Home;