class IssuedBook {
  _id;
  title;
  author;
  year;
  genre;
  available;
  issuedBy;
  issuedDate;
  returnDate;

  constructor(user) {
    this._id = user.issuedBook._id;
    this.title = user.issuedBook.title;
    this.author = user.issuedBook.author;
    this.year = user.issuedBook.year;
    this.genre = user.issuedBook.genre;
    this.available = user.issuedBook.available;
    this.issuedBy = user.issuedBy;
    this.issuedDate = user.issuedDate;
    this.returnDate = user.returnDate;
  }
}
