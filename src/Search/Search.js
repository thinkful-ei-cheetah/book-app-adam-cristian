import React, {Component} from 'react'
import PrintType from '../PrintType/PrintType'
import BookType from '../BookType/BookType'

export default class Search extends Component {


    

    render() {

        return (
            <form onSubmit={this.props.onSubmit} className="search">
                <label htmlFor="book-search">Search:</label>
                <input name='search' id="book-search" type="text" placeholder="Infinite Jest" />
                <PrintType />
                <BookType />
                <button type="submit">Search</button>
            </form>
        )
    }
}