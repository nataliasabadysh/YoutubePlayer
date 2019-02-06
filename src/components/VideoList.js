import React from 'react';

const VideoList = ({ histories }) => (
  <ul>
    {histories.map(({ id, url }) => (
      <li key={id}>
          <video 
                  width="320" 
                  height="240" 
                  controls
                >
                <source src={url} type="video/mp4" />   
            </video>
        <span>{url}</span>
      </li>
    ))}
  </ul>
);

export default VideoList;
