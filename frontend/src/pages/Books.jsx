import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import BooksSection from "../components/BooksSection";
const Books = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:1000/api/v1/getBooks")
        .then((res) => setData(res.data.books));
    };
    fetch();
  });

  return (
    <div className="bg-dark" style={{
      minHeight: "91.5vh",
      backgroundImage: "url(https://img.freepik.com/premium-photo/educational-concept-books-blue_387680-275.jpg)", // Add your image URL here
      backgroundSize: "cover", // This ensures the image covers the entire background
      backgroundPosition: "center", // Centers the background image
      backgroundRepeat: "no-repeat", // Prevents repeating of the background image
      backgroundColor: "#011000", // Sets a fallback color if the image is unavailable 
          }}>
      <div className="d-flex justify-content-center align-items-center py-3">
        <h4 className="text-white">Books Section</h4>
      </div>
      {Data ? <BooksSection data = {Data}/> : <div className="text-white">Loading...</div>}
    </div>
  );
};

export default Books;
