import React, { useState } from "react";
import './BooksSection.css';

const BooksSection = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container">
      <div className="row justify-content-start mb-1">
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 mb-4  "
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="card book-card">
                {/* Hide image on hover */}
                {hoveredIndex === index ? (
                  <div className="book-description">{item.description}</div> // Show description on hover
                ) : (
                  <img
                    className="card-img-top book-image"
                    src={item.image}
                    alt={item.bookname}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title  " style={{ color: 'black' }}>{item.bookname.slice(0, 20)}...</h6>
                  <b className="text-danger">Rs.{item.price}</b>
                  <div className="mt-auto d-flex justify-content-around">
                    <button className="btn btn-primary">UPDATE</button>
                    <button className="btn btn-danger">DELETE</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BooksSection;
