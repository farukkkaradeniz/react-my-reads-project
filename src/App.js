import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import HomePage from './main/pages/HomePage'
import SearchPage from './main/pages/SearchPage'
import { Route } from 'react-router-dom'
import * as BooksAPI from './main/utils/BooksAPI';

class BooksApp extends React.Component {
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      books.map(book => {
        book.shelfValue = book.shelf;
        return book;
      });
      this.setState((curState) => ({
        ...curState,
        books : books
      }));
    });
  }

  onChangeShelfValue = (shelfVal,bookId) => {
    const booksFiltered = this.state.books.filter(book => book.id === bookId);
    if(booksFiltered.length > 0) {
      const book = booksFiltered[0];
      book.shelfValue = shelfVal;
      this.setState((curState) => ({
        ...curState,
        books : [
          ...curState.books,
          book
        ]
      }));
    } else {
      BooksAPI.get(bookId).then((book) => {
        book.shelfValue = shelfVal;
        this.setState((curState) => ({
          ...curState,
          books : [
            ...curState.books,
            book
          ]
        }));
      });
    }
  }

  state = {
    books : [],
    shelfTypes : [
      {
         value: "move",
         name : "Move",
         disabled : true,
         display : false
      },{
        value : "currentlyReading",
        name : "Currently Reading",
        disabled : false,
        display : true
     },{
      value : "wantToRead",
      name : "Want to Read",
      disabled : false,
      display : true
     },{
      value : "read",
      name : "Read",
      disabled : false,
      display : true
     },{
      value : "none",
      name : "None",
      disabled : false,
      display : false
     }]
  }

  checkBookExistOnShelf = (bookId) => {
    const filteredBooks = this.state.books.filter(book => book.id === bookId);
    if(filteredBooks.length > 0) {
      return filteredBooks[0].shelfValue;
    } else {
      return 'none';
    }
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchPage shelfTypes={this.state.shelfTypes} changeShelftValue={this.onChangeShelfValue} checkBookExistOnShelf={this.checkBookExistOnShelf}/>
        )} />
        <Route path="/" exact render={() => (
          <HomePage shelfTypes={this.state.shelfTypes} books={this.state.books} changeShelftValue={this.onChangeShelfValue}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
