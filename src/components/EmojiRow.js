import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EmojiRow extends Component {
  render() {
    const { emoji } = this.props;
    return (
      <tr>
        <td>{emoji.char}</td>
        <td>{emoji.codes}</td>
        <td>{emoji.name}</td>
        <td>{emoji.category}</td>
      </tr>
    );
  }
}

EmojiRow.propTypes = {
  emoji: PropTypes.object.isRequired,
};

export default EmojiRow;
