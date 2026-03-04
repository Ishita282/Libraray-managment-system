class IssuedBook {
  _id;
  title;
  author;
  year;
  genre;
  available;
  issuedBook;
  issuedDate;
  returnDate;

  constructor(user) {
    this._id = user.issuedBook._id;
    this.title = user.issuedBook.title;
    this.author = user.issuedBook.author;
    this.year = user.issuedBook.year;
    this.genre = user.issuedBook.genre;
    this.available = user.issuedBook.available;
    this.issuedBook = user.issuedBook;
    this.issuedDate = user.issuedDate;
    this.returnDate = user.returnDate;
  }
}
