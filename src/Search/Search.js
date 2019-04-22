import React, {Component} from 'react'
import PrintType from '../PrintType/PrintType'
import BookType from '../BookType/BookType'

export default class Search extends Component {

    handleSubmit = () => {

    }

    componentDidMount() {
        let key = "AIzaSyAXDkc94x2BpERTQbr8jGZoBRTt41iXYkI"
        let url = `https://www.googleapis.com/books/v1/volumes?q=${searchterms}&key=${key}`

        fetch(url)

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="search">
                <label htmlFor="book-search">Search:</label>
                <input id="book-search" type="text" placeholder="Infinite Jest" required/>
                <PrintType />
                <BookType />
                <button type="submit">Search</button>
            </form>
        )
    }
}