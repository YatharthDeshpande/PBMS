import React, { useState } from "react";
import axios from "axios";
const AddBooks = () => {
  const [Data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
    .post("http://localhost:1000/api/v1/add",Data)
    .then((res) => alert(res.data.message));
    setData({
      bookname: "",
      author: "",
      description: "",
      image: "",
      price: "",
    });
  };
  console.log(Data);
  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "92.2vh" }}
    >
      <div className="container  p-4">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Boook name"
            name="bookname"
            value={Data.bookname}
            onChange={change}
          />
        </div>
        <div className="mb-3">
          <label
             htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Name of Author
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Name of Author"
            name="author"
            value={Data.author}
            onChange={change}
          />
        </div>
        <div className="mb-3">
          <label
             htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter description of The Book"
            name="description"
            value={Data.description}
            onChange={change}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter The URL of The Image"
            name="image"
            value={Data.image}
            onChange={change}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter The Price"
            name="price"
            value={Data.price}
            onChange={change}
          />
        </div>
        <button className="btn btn-success" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddBooks;
