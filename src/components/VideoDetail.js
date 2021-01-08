import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <p>Loading...</p>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail ui segment">
      <div className="ui embed">
        <iframe src={videoSrc} title={video.snippet.title}></iframe>
      </div>
      <h1 className="ui header">{video.snippet.title}</h1>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
