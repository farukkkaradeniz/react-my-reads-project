import PropTypes from "prop-types";
import React, { Component } from 'react';
import BookComponent from './BookComponent';

/**
* @extends {React.Component<{books:array.isRequired, shelfList:array.isRequired, changeShelftValue:func.isRequired}>}
*/
class BookListComponent extends Component {
  render() {
    return (
        <ol className="books-grid">
            <BookComponent books={this.props.books} shelfList={this.props.shelfList} changeShelftValue={this.props.changeShelftValue}/>
        </ol>
    );
  }
}

BookListComponent.propTypes = {
  books: PropTypes.array.isRequired,
  shelfList : PropTypes.array.isRequired,
  changeShelftValue : PropTypes.func.isRequired
}

export default BookListComponent;
