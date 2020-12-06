import axios from "axios";

class BookService {
  deleteBook(id) {
    axios
      .get("http://localhost:4000/books/deleteBook/" + id)
      .then(() => {
        console.log("Book Deleted !!!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /*borrowBook(id) {
	 axios.get('http://localhost:4000/books/borrowBook/' + id)
	 .then(() => {
		 console.log('Book Borrowed')
	 })
	 .catch((error) => {
		 console.log(error)
	 })
 }*/
}

export default BookService;
