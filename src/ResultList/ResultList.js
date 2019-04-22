import React, { Component } from 'react';
import Result from '../Result/Result'

export default class ResultList extends Component {
    render() {
        console.log(this.props.books)

        const bookResults = this.props.books.map(book => {
                return (
                    <Result 
                    key={book.id}
                    name={book.id}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    price={book.saleInfo && book.saleInfo.listPrice && book.saleInfo.listPrice.amount}
                    noPrice={book.saleInfo.saleability}
                    description={book.volumeInfo.description}
                    imageSrc={book.volumeInfo.imageLinks.thumbnail} 
                    />
                     )  
        })
        
        return (
            <ul className="result-list">
                {bookResults}
            </ul>

        )
    }
}