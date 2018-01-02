import React from 'react';

const VideoDetail = ({video}) => {

    /**
     * Check if the video has been already provided in the props (beacause it's async). And if not
     * a message ("Loading...") will be displayed until the video is present. 
     */
    if (!video) {
        return <div>Video loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;