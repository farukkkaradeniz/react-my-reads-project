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
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                                <ChangeShelfComponent shelftTypes={this.props.shelfList} shelfValue={book.shelfValue ? book.shelfValue : 'none'} changeShelftValue={this.props.changeShelftValue} bookId={book.id ? book.id : ''}/>
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
