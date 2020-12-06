// Importing important packages
 const express = require('express');
 
 // Using express and routes
 const app = express();
 const bookRoute = express.Router();
 
 // Book module which is required and imported
 let bookModel = require('../Model/Book');
 
 // To Get List Of Books which havent been borrowed
 bookRoute.route('/').get(function (req, res) {
 bookModel.find({borrowedStatus: 0},function (err, book) {
 if (err) {
 console.log(err);
 }
 else {
 res.json(book);
 }
 });
 });
 
 // To Add New Book
 bookRoute.route('/addBook').post(function (req, res) {
 let book = new bookModel(req.body);
 book.save()
 .then(game => {
 res.status(200).json({ 'book': 'Book Added Successfully' });
 })
 .catch(err => {
 res.status(400).send("Something Went Wrong");
 });
 });
 
 // To Get Book Details By Book ID
 bookRoute.route('/editBook/:id').get(function (req, res) {
 let id = req.params.id;
 bookModel.findById(id, function (err, book) {
 res.json(book);
 });
 });
 
 // To Update The Book Details
 bookRoute.route('/updateBook/:id').post(function (req, res) {
 bookModel.findById(req.params.id, function (err, book) {
 if (!book)
 return next(new Error('Unable To Find Book With This Id'));
 else {
 book.title = req.body.title;
 book.author = req.body.author;
 book.donatedbyName = req.body.donatedbyName;
 book.note = req.body.note;
 book.borrowedStatus = req.body.borrowedStatus;
 book.borrowedbyName = req.body.borrowedbyName;
 
 book.save().then(emp => {
 res.json('Book Updated Successfully');
 })
 .catch(err => {
 res.status(400).send("Unable To Update book");
 });
 }
 });
 });
 
 // To Delete The Book
 bookRoute.route('/deleteBook/:id').get(function (req, res) {
 bookModel.findByIdAndRemove({ _id: req.params.id }, function (err, book) {
 if (err) res.json(err);
 else res.json('Book Deleted Successfully');
 });
 });
 
 //To get the books with matching title
 bookRoute.route('/searchBook/:searchTitle').get(function (req, res) {
 bookModel.find({title: req.params.searchTitle, borrowedStatus: 0},function (err, book) {
 if (err) {
 console.log(err);
 }
 else {
 res.json(book);
 }
 });
 });
 
 //to get the books with matching author name
 bookRoute.route('/searchAuthor/:searchAuthor').get(function (req, res) {
 bookModel.find({author: req.params.searchAuthor, borrowedStatus: 0},function (err, book) {
 if (err) {
 console.log(err);
 }
 else {
 res.json(book);
 }
 });
 });
 
 //To get list of books borrowed by a particular user
 bookRoute.route('/searchUser/:searchUser').get(function (req, res) {
 bookModel.find({borrowedbyName: req.params.searchUser, borrowedStatus: 1},function (err, book) {
 if (err) {
 console.log(err);
 }
 else {
 res.json(book);
 }
 });
 });
 
 
 module.exports = bookRoute;