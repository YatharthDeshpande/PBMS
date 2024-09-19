const router = require("express").Router();
const bookModel = require("../models/booksModel");


//post request to add bookr
router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(() => {
            res.status(200).json({ message: "Book Added Successfully" });
        });
    } catch (error) {
        console.log(error);
    }
});
//get request to get all books
router.get("/getbooks",async(req,res)=>{
    let books;
    try{
        books= await bookModel.find();
        res.status(200).json({books});

    }catch(error){
        console.log(error);
    }
});
//get request to get book by id
router.get("/getbooks/:id", async(req,res)=>{
    let book;
    const id = req.params.id;
    try{
       book = await bookModel.findById(id);
       res.status(200).json({book});

    }catch(error){
        console.log(error);
    }
    });
//update request to update book by id
router.put("/updatebook/:id", async(req,res)=>{

    const id=req.params.id;
    const {bookname,description,author,image,price}=req.body;
    let book;
    try {
        book = await bookModel.findByIdAndUpdate(id,{
            bookname,
            description,
            author,
            image,
            price

        });
        await book.save().then(()=>res.json({message:"Book Data Updated Successfully"}));
    } catch (error) {
        console.log(error);
    }
});
//delete request to delete book by id
router.delete("/deleteBook/:id", async(req,res)=>{
  const id = req.params.id;
    try {
    await bookModel 
    .findByIdAndDelete(id)
    .then(()=>res.json({message:"Book Deleted Successfully"}));
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;