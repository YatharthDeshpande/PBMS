import React from "react";

const BooksSection = ({ data }) => {
  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap ">
      {data &&
        data.map((item, index) => (
          <div
          key={index} // Added key prop here
            className="m-3 glass"
            style={{
              width: "200px",
              height: "360px",
              border: "1px solid white",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div>
              <img
                style={{ width: "200px", height: "210px" }}
                className="img-fluid"
                src={item.image}
                alt="/"
              />
            </div>
            <h6 style={{ fontSize: "25px" }} className="text-black px-2 m-0">
              {item.bookname.slice(0, 20)}...
            </h6>
            <b style={{ fontSize: "30px", color: "red" }} className=" px-2">
              Rs.{item.price}
            </b>
            <div className="d-flex justify-content-around align-items-center mb-2">

            <button className="btn btn-primary">UPDATE</button>
            <button className="btn btn-danger">DELETE</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BooksSection;
