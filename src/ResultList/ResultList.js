import React, { Component } from 'react';
import Result from '../Result/Result'

export default class ResultList extends Component {
    render() {
        return (
            <ul className="result-list">
                <Result />
            </ul>

        )
    }
}