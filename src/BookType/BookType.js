import React, { Component } from 'react';

export default class BookType extends Component {
    render() {
        return (
            <div>
                <label htmlFor="book-type">Book Type:</label>
                <select id="book-type">
                    <option value="">No Filter</option>
                    <option value="ebooks">E-books</option>
                    <option value="free-ebooks">Free E-books</option>
                    <option value="paid-ebooks">Paid E-books</option>
                    <option value="full">Full</option>
                    <option value="partial">Partial</option>
                </select>
            </div>
        )
    }
}

