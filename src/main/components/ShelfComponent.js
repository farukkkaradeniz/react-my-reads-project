import PropTypes from "prop-types";
import React, { Component } from 'react';
import BookListComponent from "./BookListComponent";

/**
* @extends {React.Component<{shelfHeader:string.isRequired, books:array.isRequired, shelfList:array.isRequired,changeShelftValue:func.isRequired}>}
*/
class ShelfComponent extends Component {
  render() {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.shelfHeader}</h2>
            <div className="bookshelf-books">
                <BookListComponent books={this.props.books} shelfList={this.props.shelfList} changeShelftValue={this.props.changeShelftValue}/>
            </div>
        </div>
    );
  }
}

ShelfComponent.propTypes = {
  shelfHeader: PropTypes.string.isRequired,
  books : PropTypes.array.isRequired,
  shelfList : PropTypes.array.isRequired,
  changeShelftValue : PropTypes.func.isRequired
}

export default ShelfComponent;
