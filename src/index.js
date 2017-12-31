import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDg3jFevSmIahIfaWSgg4suz04I3bXaWuI';

// 1) Create a new component. This component should produce some HTML
/**
 * Currently this is a functional component because it simple is a component build by a function
 */
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// 2) Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

