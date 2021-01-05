import PropTypes from "prop-types";
import React, { Component } from 'react';
import ChangeShelfComponent from "./ChangeShelfComponent";

/**
* @extends {React.Component<{books:array.isRequired, shelfList:array.isRequired, changeShelftValue:func.isRequired}>}
*/
class BookComponent extends Component {
  render() {
    return (
        <div className="books-grid">
            {
                this.props.books.map(book => (
                    <li key={Math.random().toString(36)}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}></div>
                                <ChangeShelfComponent shelftTypes={this.props.shelfList} shelfValue={book.shelf ? book.shelf : 'none'} changeShelftValue={this.props.changeShelftValue} bookId={book.id ? book.id : ''}/>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                </li>
                ))
            }
        </div>
        
    );
  }
}

BookComponent.propTypes = {
  books: PropTypes.array.isRequired,
  shelfList : PropTypes.array.isRequired,
  changeShelftValue : PropTypes.func.isRequired
}

export default BookComponent;
