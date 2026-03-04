const { userModel, bookModel } = require("../model/export");
const issuedBook = require("../dtos/book-dto");

// Description: Get all the list of the books in the system

exports.getAllBooks = async (req, res) => {
  const allBooks = await bookModel.find();

  if (allBooks.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No books in the system",
    });
  }

  res.status(200).json({
    success: true,
    data: allBooks,
  });
};

// Description: Add a new book to the system

exports.createBook = async (req, res) => {
  const { data } = req.body;

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({
      success: false,
      message: "Please provide all the fields",
    });
  }

  await bookModel.create(data);
  const allBook = await bookModel.find();

  res.status(201).json({
    success: true,
    message: "Book is created successfully",
    data: allBook,
  });
};

// Description: Get all the list of the books in the system

exports.getBookByID = async (req, res) => {
  const { id } = req.params;

  const book = await bookModel.findById(id);
  if (!book) {
    return res.status(404).json({
      success: false,
      message: "No book found with this id",
    });
  }

  res.status(200).json({
    success: true,
    data: book,
  });
};

// Description: Update a book by its id

exports.updateBookByID = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  if (!data || Object.keys(data).length === 0) {
    res.status(400).json({
      success: false,
      message: "Please provide some data",
    });
  }

  // Method-1

  /*
  const updatedBook = await bookModel.findById(id);

  if (!updatedBook) {
    res.status(409).json({
      success: false,
      message: `Book does not exists with id: ${id}`,
    });
  }

  Object.assign(book, data);
  await book.save();

  res.status(200).json({
    success: true,
    message: "Book updated successfully",
    data: updatedBook,
  });
*/

  // Method-2

  const updatedBook = await bookModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });

  if (!updatedBook) {
    res.status(409).json({
      success: false,
      message: `Book does not exists with id: ${id}`,
    });
  }

  res.status(200).json({
    success: true,
    message: "Book updated successfully",
    data: updatedBook,
  });
};

// Description: Delete a book by its id

exports.deleteBookByID = async (req, res) => {
  const { id } = req.params;

  const book = bookModel.findById(id);

  if (!book) {
    return res.status(404).json({
      success: false,
      message: `Book doesn't exists with id: ${id}`,
    });
  }

  await bookModel.findOneAndDelete(id);

  res.status(200).json({
    success: true,
    message: "Book deleted successfully",
  });
};

// Description: Get all the list of the issued books in the system

exports.bookIssued = async (req, res) => {
  const users = await userModel
    .find({
      issuedBook: { $exists: true },
    })
    .populate("issuedBook");

  const issuedBooks = users.map((each) => {
    return new IssuedBook(each);
  });

  if (!issuedBooks.length) {
    return res.status(404).json({
      success: false,
      message: "No book issued yet",
    });
  }

  res.status(200).json({
    success: true,
    data: issuedBooks,
  });
};
