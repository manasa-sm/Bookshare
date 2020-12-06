import React, { Component } from 'react';
 import axios from 'axios';
 import Header from './Header';
 
 const customStyle = {
 width: '300px',
 margin: '0 auto'
 }
 
 class AddBook extends Component {
 constructor(props) {
 super(props);
 this.state = {
 title: '',
 author: '',
 donatedbyName: '',
 note: '',
 borrowedStatus: '',
 borrowedbyName: ''
 }
 }
 
 // When value changes of the fields
 handleChange = (event) => {
 this.setState({ [event.target.name]: event.target.value });
 }
 
 // To add new book when user submits the form
 handleSubmit = (event) => {
 event.preventDefault();
 const { title, author, donatedbyName, note } = this.state;
 axios.post('http://localhost:4000/books/addBook', {
 title: title,
 author: author,
 donatedbyName: donatedbyName,
 note: note,
 borrowedStatus: 0,
 borrowedbyName : "",
 })
 .then((response) => {
 console.log(response);
 this.props.history.push('/');
 })
 .catch((error) => {
 console.log(error);
 });
 }
 
 render() {
 return (
 <div className="container">
 <form style={customStyle} onSubmit={this.handleSubmit}>
 <label>
 Book Title
 <input
 name="title"
 type="text"
 value={this.state.title}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 Author
 <input
 name="author"
 type="text"
 value={this.state.author}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 Donator Name
 <input
 name="donatedbyName"
 type="text"
 value={this.state.donatedbyName}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 About
 <input
 name="note"
 type="text"
 value={this.state.note}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <input
 type="submit"
 value="Donate this Book"
 className="btn btn-primary"
 />
 </form>
 </div>
 );
 }
 }
 
 export default AddBook;