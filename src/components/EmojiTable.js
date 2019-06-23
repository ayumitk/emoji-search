import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmojiRow from './EmojiRow';

class EmojiTable extends Component {
  render() {
    const { filterText, inCategory, EmojiData } = this.props;
    const row = [];
    EmojiData.forEach((emoji, index) => {
      if (emoji.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      if (emoji.category !== inCategory && inCategory !== 'All') {
        return;
      }
      row.push(
        <EmojiRow emoji={emoji} key={index} />,
      );
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Emoji</th>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {row}
        </tbody>
      </table>
    );
  }
}

EmojiTable.propTypes = {
  filterText: PropTypes.string.isRequired,
  inCategory: PropTypes.string.isRequired,
  EmojiData: PropTypes.array.isRequired,
};

export default EmojiTable;
