import React, { Component } from 'react';
 import { Switch, Route } from 'react-router-dom';
 
 // Our all component files
 import ListBook from '../Components/ListBook';
 import AddBook from '../Components/AddBook';
 import EditBook from '../Components/EditBook';
 import BorrowBook from '../Components/BorrowBook';
 import SearchBook from '../Components/BookSearch';
 import SearchAuthor from '../Components/SearchAuthor';
 import SearchUser from '../Components/SearchUser';
 import ReturnBook from '../Components/ReturnBook';
 
 class Main extends Component {
 
 render() {
 return (
 <main>
 <Switch>
 <Route exact path='/' component={ListBook} />
 <Route path='/list' component={ListBook} /> 
 <Route path='/addbook' component={AddBook} />
 <Route path='/editbook/:id' component={EditBook} />
 <Route path='/borrowbook/:id' component={BorrowBook} />
 <Route path='/searchbook' component={SearchBook} />
 <Route path='/searchauthor' component={SearchAuthor} />
 <Route path='/searchuser' component={SearchUser} />
 <Route path='/returnbook/:id' component={ReturnBook} />
 </Switch>
 </main>
 );
 }
 }

 export default Main;