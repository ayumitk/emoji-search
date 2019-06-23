import React, { Component } from 'react';
import EmojiData from 'emoji.json';
import SearchBar from './components/SearchBar';
import EmojiTable from './components/EmojiTable';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

class App extends Component {
  state = {
    filterText: '',
    inCategory: 'All',
  };

  handleFilterText = (filterText) => {
    // console.log(event);
    this.setState({
      filterText,
    });
  }

  handleInCategory = (inCategory) => {
    // console.log(event.target.value);
    this.setState({
      inCategory,
    });
  }

  render() {
    const categoryData = EmojiData
      .map(item => item.category)
      .filter((x, i, self) => self.indexOf(x) === i);
    // console.log(categoryData);

    const { filterText, inCategory } = this.state;

    return (
      <div>
        <div className="search-bar">
          <div className="container">
            <SearchBar
              categoryData={categoryData}
              onChangeFilterText={this.handleFilterText}
              onChangeInCategory={this.handleInCategory}
            />
          </div>
        </div>
        <div className="container">
          <EmojiTable
            EmojiData={EmojiData}
            filterText={filterText}
            inCategory={inCategory}
          />
        </div>
      </div>
    );
  }
}

export default App;
