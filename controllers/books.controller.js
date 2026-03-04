const { userModel, bookModel } = require("../model");

/*
Route: /books
Method: GET
Description: Get all the list of the books in the system
Access: Public
Parameter: id
*/

exports.getAllBooks = async (req, res) => {
  const allBooks = await bookModel.find();

  if (books.length === 0) {
    return res.status.json({
      success: false,
      message: "No books in the system"
    });
  }

  res.status(200).json({
    success: true,
    data: books,
  });
};

/*
Route: /books
Method: POST
Description: Add a new book to the system
Access: Public
Parameter: id
*/

// route.post("/", (req, res) => {
//   const { id, title, author, year, genre, available } = req.body;

//   if (!id || !title || !author || !year || !genre || !available) {
//     res.status(400).json({
//       success: false,
//       message: "Please provide all the fields",
//     });
//   }

//   const book = books.find((each) => each.id === id);

//   if (book) {
//     res.status(409).json({
//       success: false,
//       message: `Book is already exists with id: ${id}`,
//     });
//   }

//   books.push({
//     id,
//     title,
//     author,
//     year,
//     genre,
//     available,
//   });

//   res.status(201).json({
//     success: true,
//     message: "Book is created successfully",
//   });
// });

exports.createBook = async (req, res) => {
  
};

/*
Route: /books/{id}
Method: GET
Description: Get all the list of the books in the system 
Access: Public
Parameter: id
*/

// route.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const book = books.find((each) => each.id === id);

//   if (!book) {
//     return res.status(404).json({
//       success: false,
//       message: "No book found with this id",
//     });
//   }

//   res.status(200).json({
//     success: true,
//     data: book,
//   });
// });

exports.getBookByID = async (req, res) => {
  
};

/*
Route: /books/{id}
Method: PUT
Description: Update a book by its id 
Access: Public
Parameter: id
*/

// route.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { data } = req.body;

//   if (!data) {
//     res.status(400).json({
//       success: false,
//       message: "Please provide some data",
//     });
//   }

//   const book = books.find((each) => each.id === id);

//   if (!book) {
//     res.status(409).json({
//       success: false,
//       message: `Book does not exists with id: ${id}`,
//     });
//   }

//   //Method-1
//   // Object.assign(book, data)

//   // OR

//   //Method-2
//   const bookUpdate = books.map((each) => {
//     if (each.id === id) {
//       return {
//         ...each,
//         ...data,
//       };
//     }
//     return each;
//   });

//   res.status(200).json({
//     success: true,
//     message: "Book updated successfully",
//     data: bookUpdate,
//   });
// });

exports.updateBookByID = async (req, res) => {
  
};

/*
Route: /books/{id}
Method: DELETE
Description: Delete a book by its id 
Access: Public
Parameter: id
*/

// route.delete("/:id", (req, res) => {
//   const { id } = req.params;

//   const book = books.find((each) => each.id === id);

//   if (!book) {
//     return res.status(404).json({
//       success: false,
//       message: `Book doesn't exists with id: ${id}`,
//     });
//   }

//   //if book is exist, then filter it out from the array
//   const updatebook = books.filter((each) => each.id !== id);

//   res.status(200).json({
//     success: true,
//     message: "Book deleted successfully",
//     data: updatebook,
//   });
// });

exports.deleteBookByID = async (req, res) => {
  
};

/*
Route: /books/issued/for-user
Method: GET 
Description: Get all the list of the issued books in the system
Access: Public
Parameter: None
*/

// route.get("/issued/for-user", (req, res) => {
//   const issuedBookUsers = users.filter((each) => {
//     if (each.issuedBook) {
//       return each;
//     }
//   });

//   const issuedBooks = [];

//   issuedBookUsers.forEach((each) => {
//     const book = books.find((book) => book.id === each.issuedBook);

//     book.issuedBy = each.name;
//     book.issuedDate = each.issuedDate;
//     book.returnDate = each.returnDate;

//     issuedBooks.push(book);
//   });

//   if (!issuedBooks === 0) {
//     return res.status(404).json({
//       success: false,
//       message: "No book issued yet",
//     });
//   }

//   res.status(200).json({
//     success: true,
//     data: issuedBooks,
//   });
// });

exports.issuedBook = async (req, res) => {
  
};
