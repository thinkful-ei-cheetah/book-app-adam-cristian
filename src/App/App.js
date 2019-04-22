import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import ResultList from '../ResultList/ResultList';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <header>
            <h1>Google Book Search</h1>
        </header>
        <Search />
        <ResultList />
      </div>

    );
  }
}