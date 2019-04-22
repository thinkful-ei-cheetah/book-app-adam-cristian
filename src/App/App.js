import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search';
import ResultList from '../ResultList/ResultList';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: false,
      error: null
    }
    ;
  }

  handleSubmit = (event) => {
    
    let searchTerm = event.target.search.value;
    let bookType = event.target.booktype.value;
    let printType = event.target.printtype.value;

    event.preventDefault();
    let key = "AIzaSyAXDkc94x2BpERTQbr8jGZoBRTt41iXYkI"
    let url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}}}r&filter=${bookType}&printType=${printType}&maxResults=5&key=${key}`

    fetch(url)
      .then(res => res.ok ? res.json() : Promise.reject('Everything is wrong'))
      .then(data => this.setState({
        books: data.items
      }))
      .catch(err => this.setState({error: err}))
  }

  
  render() {
    console.log(this.state.error)
    return (
      <div className="app-container">
        <header>
            <h1>Google Book Search</h1>
        </header>
        <Search onSubmit={this.handleSubmit} />
        <ResultList />
      </div>

    );
  }
}