import React, { Component } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
// To use routing functionalities
import { Link } from "react-router-dom";
import "../index.css";
import BookService from "./Services";
import Header from "./Header";

var divStyle = {
  margin: "8% 8%",
};

const customStyle = {
  width: "300px",
  margin: "0 auto",
};
class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.bookService = new BookService();
    this.state = {
      books: [],
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    axios
      .get("http://localhost:4000/books/searchBook/" + this.state.title)
      .then((response) => {
        console.log(response);
        this.setState({
          books: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { books } = this.state;
    return (
      <div>
        <form style={customStyle} onSubmit={this.handleSubmit}>
          <label>
            Search Book:
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <input type="submit" value="submit" className="btn btn-primary" />
        </form>
        <div style={divStyle}>
          <h3>Here is what we found</h3>
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
              {books &&
                books.map((book, i) => {
                  return (
                    <tr key={i}>
                      <td>{i}</td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.donatedbyName}</td>
                      <td>{book.note}</td>
                      <td>
                        <Link
                          to={"borrowbook/" + book._id}
                          className="btn btn-primary"
                        >
                          Borrow
                        </Link>
                      </td>
                      <td></td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default SearchBook;
