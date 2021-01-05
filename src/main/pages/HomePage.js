import PropTypes from "prop-types";
import React, { Component } from 'react';
import ShelfComponent from '../components/ShelfComponent';
import { Link } from "react-router-dom";

/**
* @extends {React.Component<{shelfTypes:array.isRequired}>}
*/
class HomePage extends Component {
  render() {
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        <div className="list-books-content">
            {
              this.props.shelfTypes.filter(shelfType => shelfType.display).map(shelfType => (
                <ShelfComponent shelfHeader={shelfType.name} 
                    books={this.props.books.filter(book => book.shelf === shelfType.value)} 
                    key={shelfType.value}
                    shelfList={this.props.shelfTypes}
                    changeShelftValue={this.props.changeShelftValue}/>
              ))
            }
        </div>
        <div className="open-search">
          <Link to="/search"> Add a book </Link>
        </div>
      </div>
    
    );
  }
}

HomePage.propTypes = {
  shelfTypes: PropTypes.array.isRequired,
  books : PropTypes.array.isRequired,
  changeShelftValue : PropTypes.func.isRequired
}

export default HomePage;
