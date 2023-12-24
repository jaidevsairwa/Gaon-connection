import React from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = ({ videoId, isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 ${isOpen ? 'visible' : 'invisible'}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-4 rounded shadow-lg">
          <YouTube videoId={videoId} />
          <button onClick={onClose} className="text-red-500 mt-2 block">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default YoutubePlayer;