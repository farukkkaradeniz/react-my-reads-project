import PropTypes from "prop-types";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import BookListComponent from '../components/BookListComponent';

/**
* @extends {React.Component<{changeShelftValue:Function.isRequired, shelfTypes:array.isRequired, checkBookExistOnShelf:func.isRequired}>}
*/
class SearchPage extends Component {
  state = {
    books : [],
    searchQuery : '',
    errorMessage : 'For listing books type into search input !!!'
  };

  onChangeInputVal = value => {
    this.setState((curState) => ({
      searchQuery : value,
      errorMessage : '',
      books : []
    }));
    if(value.trim() !== '') {
      BooksAPI.search(value,100).then((books) => {
        if (Array.isArray(books)) {
          this.setState((curState) => ({
            ...curState,
            books : books
          }));
        } else {
          this.setState((curState) => ({
            ...curState,
            books : [],
            errorMessage: 'Error ! received message from backend : ' + books.error
          }));
        }
      });
    } else {
      this.setState((curState) => ({
        ...curState,
        errorMessage : 'For listing books type into search input !!!'
      }));
    }
  }

  onChangeShelfVal = (shelfVal,bookId) => {
    const book = this.state.books.filter(book => book.id === bookId)[0];
    var index = this.state.books.findIndex(book => book.id === bookId);
    if (index !== -1) {
      book.shelf = shelfVal;
      this.setState((curState) => ({
        ...curState,
        books : [...curState.books.slice(0,index),
          Object.assign({}, this.state.books[index], book),
          ...this.state.books.slice(index+1)
        ]
      }));
      this.props.changeShelftValue(shelfVal,bookId);
    }
  }

  showErrorMessage = () => {
    if (this.state.errorMessage === '') {
      return <BookListComponent books={this.state.books} shelfList={this.props.shelfTypes} changeShelftValue={this.onChangeShelfVal}/>;
    } else {
      return <span style={{marginTop:'200px'}}> {this.state.errorMessage} </span>
    }
  }

  render() {
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" value={this.state.searchQuery} onChange={(event) => this.onChangeInputVal(event.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          {
            this.showErrorMessage()
          }
        </div>
      </div>
    
    );
  }
}

SearchPage.propTypes = {
  changeShelftValue: PropTypes.func.isRequired,
  shelfTypes: PropTypes.array.isRequired,
  checkBookExistOnShelf: PropTypes.func.isRequired
}

export default SearchPage;
