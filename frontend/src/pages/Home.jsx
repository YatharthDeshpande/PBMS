import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const image =require("../images/book.jpg");
  return (
    <div className="Home-Page text-white d-flex container-fluid justify-content-center align-items-center ">
      <div className="row container  ">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          
        >
        <h2 style={{fontSize:"80px"}}>Your Books</h2>
        <p className="mb-0" style={{color:"silver"}}>SEE YOUR COLLECTIONS </p>
        <Link to="/books" className="viewBook my-3 ">View books</Link>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
          
        >
        <img 
        className="img-fluid "
        src="https://i.pinimg.com/originals/0d/3b/4a/0d3b4a443852d126ac2cb36a9695ffa3.png" 
        alt="/"/>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
