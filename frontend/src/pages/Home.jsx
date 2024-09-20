import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const image =require("../images/book.jpg");
  return (
    <div className="Home-Page bg-success text-white d-flex container-fluid justify-content-center align-items-center ">
      <div className="row container  ">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "91.5vh" }}
        >
        <h2 style={{fontSize:"80px"}}>Your Books</h2>
        <h3 style={{fontSize:"50px"}}>FOR YOU</h3>
        <p className="mb-0" style={{color:"silver"}}>SEE YOOUR COLLECTIONS </p>
        <Link to="/books" className="viewBook my-3 ">View books</Link>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
          style={{ height: "91.5vh" }}
        >
        <img 
        className="img-fluid homeimg"
        src="https://i.pinimg.com/originals/0d/3b/4a/0d3b4a443852d126ac2cb36a9695ffa3.png" 
        alt="/"/>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
