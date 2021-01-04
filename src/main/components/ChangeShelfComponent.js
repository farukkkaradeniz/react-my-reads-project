import PropTypes from "prop-types";
import React, { Component } from 'react';

/**
* @extends {React.Component<{shelftTypes:array.isRequired, shelfValue:string.isRequired, changeShelftValue:func.isRequired, bookId:string.isRequired}>}
*/
class ChangeShelfComponent extends Component {
  render() {
    return (
        <div className="book-shelf-changer">
            <select value={this.props.shelfValue ? this.props.shelfValue : 'none'} onChange={(event) => this.props.changeShelftValue(event.target.value,this.props.bookId)}>
                {
                  this.props.shelftTypes.map(shelfType => (
                    <option value={shelfType.value} disabled={shelfType.disabled} key={shelfType.value}>{shelfType.name}</option>
                  ))
                }
            </select>
        </div>
    );
  }
}

ChangeShelfComponent.propTypes = {
  shelftTypes: PropTypes.array.isRequired,
  shelfValue : PropTypes.string.isRequired,
  changeShelftValue : PropTypes.func.isRequired,
  bookId : PropTypes.string.isRequired
}

export default ChangeShelfComponent;
