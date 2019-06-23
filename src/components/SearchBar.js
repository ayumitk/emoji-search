import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  handleFilterText = (event) => {
    // console.log(event.target.value);
    const { onChangeFilterText } = this.props;
    onChangeFilterText(event.target.value);
  }

  handleInCategory = (event) => {
    const { onChangeInCategory } = this.props;
    onChangeInCategory(event.target.value);
  }

  render() {
    const { categoryData } = this.props;
    return (
      <div className="row">
        <div className="col-sm-7">
          <input
            type="text"
            placeholder="Search..."
            onChange={this.handleFilterText}
            className="form-control"
          />
        </div>
        <div className="col-sm-5">
          <select
            onChange={this.handleInCategory}
            className="form-control"
          >
            <option val="All">All</option>
            {categoryData.map((item, index) => (
              <option key={index} val={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onChangeFilterText: PropTypes.func.isRequired,
  onChangeInCategory: PropTypes.func.isRequired,
  categoryData: PropTypes.array.isRequired,
};

export default SearchBar;
