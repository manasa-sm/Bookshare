import React, { Component } from 'react';
 import axios from 'axios';
 import { Table, Button } from 'react-bootstrap';
 // To use routing functionalities
 import { Link } from 'react-router-dom';
 import '../index.css';
 import BookService from './Services';
 import Header from './Header';
 
 var divStyle = {
 margin: '8% 8%',
 };
 
 class ListBook extends Component {
 
 constructor(props) {
 super(props);
 this.bookService = new BookService();
 this.state = {
 books: []
 }
 this.deleteBook = this.deleteBook.bind(this);
 }
 
 componentDidMount = () => {
 this.getBookList();
 }
 
 // To get all the books
 getBookList() {
 axios.get('http://localhost:4000/books')
 .then((response) => {
 console.log(response);
 this.setState({
 books: response.data
 });
 })
 .catch((error) => {
 console.log(error);
 })
 }
 
 // To delete any book
 deleteBook(bookid) {
 this.bookService.deleteBook(bookid);
 this.getBookList();
 }
 
 render() {
 const { books } = this.state;
 return (
 <div style={divStyle}>
 <h3>Welcome to the Library</h3>
 <Table responsive>
 <thead>
 <tr>
 <th>#</th>
 <th>Title</th>
 <th>Author</th>
 <th>Donate By</th>
 <th>About</th>
 <th></th>
 <th></th>
 </tr>
 </thead>
 <tbody>
 {
 books && books.map((book, i) => {
 return (
 <tr key={i}>
 <td>{i}</td>
 <td>{book.title}</td>
 <td>{book.author}</td>
 <td>{book.donatedbyName}</td>
 <td>{book.note}</td>
 <td>
 <Link to={"editbook/" + book._id} className="btn btn-primary">Edit</Link>
 </td>
 <td>
 <Link to={"borrowbook/" + book._id} className="btn btn-primary">Borrow</Link>
 </td>
 <td>
 <Button onClick={() => this.deleteBook(book._id)} bsStyle="danger" >Delete</Button>
 </td>
 </tr>
 )
 })
 }
 </tbody>
 </Table>
 </div>
 );
 } 
 }
 
 export default ListBook;