import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos'; // custom hook
import VideoDetail from './VideoDetail';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('cute puppers');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]); // Every time that videos changes and also when this component is first mounted, set a selected video

  return (
    <div className="ui container">
      <h1 style={{ margin: '2vh' }}>Welcome</h1>
      {/* pass onFormSubmit as a prop to SearchBar */}
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            {/* <VideoList onVideoSelect={(video) => setSelectedVideo(video)} videos={videos} /> */}
            {/* When we have an arrow function simply passing a function with the same argument, 'video' in this 
            case, we can simplify it this way and it'll be 100% equivalent, this is because setSelectedVideo
            is a setter function of useState, so VideoList will simply invoke it like this: setSelectedVideo(updatedValue) */}
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
      <p>I have {videos.length} videos</p>
    </div>
  );
};

export default App;
