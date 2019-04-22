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
    let url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}}}r&maxResults=5&key=${key}`

    if (bookType){
      url += `&filter=${bookType}`
    } 
    
    if (printType) {
      url += `&printType=${printType}`
    }

    this.setState({
      loading: true, error: null
    });
    fetch(url)
      .then(res => res.ok ? res.json() : Promise.reject('Everything is wrong. Try Again'))
      .then(data => this.setState({
        books: data.items,
        loading: false
      }))
      .catch(error => this.setState({error, loading: false}))
  }

  
  render() {
    return (
      <div className="app-container">
        <header>
            <h1>Google Book Search</h1>
        </header>
        <h2>{this.state.error}</h2>
        <Search onSubmit={this.handleSubmit} />
        <ResultList books={this.state.books}/>
      </div>

    );
  }
}