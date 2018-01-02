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
            <div className="search-bar">
                {/* This is a controlled field - because it is a form element 
                    whos current value is set by the state */}
                <input 
                    value={this.state.searchTerm} // when setting the value a onChange property is required 
                    onChange={ event => this.onInputChange(event.target.value) } 
                />
                <br />
            </div>
        ); 
    }

    // event handler function
    onInputChange = (term) => {
        this.setState({
            searchTerm: term
        });
        this.props.onSearchTermChange(term);
        console.log(term)
    }

};

export default SearchBar;