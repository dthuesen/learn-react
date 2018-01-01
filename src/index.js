import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDg3jFevSmIahIfaWSgg4suz04I3bXaWuI';



/**  
 * In React the most top level component is responsive for fetching data for the downwards data flow.
 * This is currently at the most top level. So this component will fetch the data for all the child components.
 */
class App extends Component {
    constructor() {
        super();
        
        this.state = {
            videos: [],
        }

        YTSearch({ key: API_KEY, searchTerm: 'surfboards'}, videos => {
            this.setState({ videos }); // same as '{ videos: videos }'
        })
    }

    render()  {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        )
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));

