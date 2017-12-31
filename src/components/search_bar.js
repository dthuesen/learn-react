import React, { Component } from 'react';

class SearchBar extends Component {

    constructor (props) {
        super(props);

        this.state = {
            searchTerm: ''
        }
    }

    render() {
        return ( 
            <div>
                {/* This is a controlled field - because it is a form element 
                    whos current value is set by the state */}
                <input 
                    value={this.state.searchTerm} // when setting the value a onChange property is required 
                    onChange={ this.onInputChange.bind(this) } 
                />
                <br />
                Value of the input: {this.state.searchTerm}
            </div>
        ); 
    }

    // event handler function
    onInputChange(event) {
        this.setState({
            searchTerm: event.target.value
        });
        console.log(this.state.searchTerm)
    }

};

export default SearchBar;