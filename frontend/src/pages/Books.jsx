import React, { useState, useEffect } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/getBooks");
        console.log(res);
        setBooks(res.data.books); // Assuming the response has a 'books' property
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks(); // Call the function here
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="bg-dark" style={{ minHeight: "91.5vh" }}>
      <div className="d-flex justify-content-center align-items-center py-3">
        <h4 className="text-white">Books Section</h4>
      </div>
      <div>
        {books.map((book) => (
          <div key={book._id} className="text-white">
            <h5>{book.bookname}</h5>
            <p>{book.author}</p>
            {/* Add other book details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
