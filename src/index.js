import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

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
            selectedVideo: null,
        }

        this.videoSearch('surfboards');
    }
    
    videoSearch = (searchTerm) => {
        YTSearch({ key: API_KEY, term: searchTerm}, videos => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0],
            });
        })

    }

    render()  {

        const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 800 )

        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch } />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        )
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));

