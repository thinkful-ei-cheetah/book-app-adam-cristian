import React, { Component } from 'react';

export default class Result extends Component {
    render() {
        // if (!this.props.price) {
            return (
                <li key={this.props.name} className="result">
                    <h2>Title: {this.props.title}</h2>
                    <p>Author(s): {this.props.author}</p>
                    <p>Price: {this.props.price ? `$${this.props.price}` : this.props.noPrice}</p>
                    <p>Description: {this.props.description}</p>
                    <img src={this.props.imageSrc} alt={`For ${this.props.title}`} />
                </li>
            )
    
        }
    }


