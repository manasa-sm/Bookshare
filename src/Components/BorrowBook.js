import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

const customStyle = {
  width: "300px",
  margin: "0 auto",
};

class BorrowBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      donatedbyName: "",
      note: "",
      borrowedStatus: "",
      borrowedbyName: "",
    };
  }

  componentDidMount = () => {
    this.getBookById();
  };

  // To get book based on ID
  getBookById() {
    axios
      .get("http://localhost:4000/books/editBook/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          title: response.data.title,
          author: response.data.author,
          donatedbyName: response.data.donatedbyName,
          note: response.data.note,
          borrowedStatus: response.data.borrowedStatus,
          borrowedbyName: response.data.borrowedbyName,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // To update the record on submit
  handleSubmit = (event) => {
    event.preventDefault();
    const {
      title,
      author,
      donatedbyName,
      note,
      borrowedStatus,
      borrowedbyName,
    } = this.state;
    axios
      .post(
        "http://localhost:4000/books/updateBook/" + this.props.match.params.id,
        {
          title: title,
          author: author,
          donatedbyName: donatedbyName,
          note: note,
          borrowedStatus: 1,
          borrowedbyName: borrowedbyName,
        }
      )
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <form style={customStyle} onSubmit={this.handleSubmit}>
          <label>Book Title: {this.state.title}</label>
          <br />
          <label>Author: {this.state.author}</label>
          <br />
          <label>Donated By : {this.state.donatedbyName}</label>
          <br />
          <label>About: {this.state.note}</label>
          <br />
          <label>
            Borrowed By
            <input
              name="borrowedbyName"
              type="text"
              value={this.state.borrowedbyName}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <input
            type="submit"
            value="Confirm Borrow"
            className="btn btn-primary"
          />
        </form>
      </div>
    );
  }
}

export default BorrowBook;
