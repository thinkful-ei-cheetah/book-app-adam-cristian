import React, { Component } from 'react';

export default class PrintType extends Component {
    render() {
        return (
            <div>
                <label htmlFor="print-type">Print Type:</label>
                <select name='printtype' id="print-type">
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
            </div>


        )
    }
}