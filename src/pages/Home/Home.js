import React from 'react';

const Home = () => {
    return (
        <div>
        <h1 id="serviceStatus">HEADER</h1>  
      <input type="file" id="fileSelect" accept="video/*"/> 
      <button id="addToPlayback">ADD TO PLAYBACK</button>  
      <div id="playbackDiv"> 
        </div> 
      </div>
    );
};

export default Home;