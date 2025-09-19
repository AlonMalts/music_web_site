import React, { useState } from "react";
import "./MusicVideos.css";

const MusicVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Music videos data with YouTube embeds
  const musicVideos = [
    {
      id: 1,
      title: "Begin again (live Rimon 02.07)",
      youtubeId: "YOUR_YOUTUBE_VIDEO_ID_1", // Replace with actual YouTube video ID
      date: "Jul 2, 2024",
      description: "Live performance at Rimon School"
    },
    {
      id: 2,
      title: "Blusette",
      youtubeId: "YOUR_YOUTUBE_VIDEO_ID_2", // Replace with actual YouTube video ID
      date: "Feb 27, 2024",
      description: "Jazz guitar performance"
    },
    {
      id: 3,
      title: "Ptitsi (2013)",
      youtubeId: "YOUR_YOUTUBE_VIDEO_ID_3", // Replace with actual YouTube video ID
      date: "Apr 27, 2024",
      description: "Early performance from 2013"
    },
    {
      id: 4,
      title: "So tired (live Rimon 02.07)",
      youtubeId: "YOUR_YOUTUBE_VIDEO_ID_4", // Replace with actual YouTube video ID
      date: "Jul 2, 2024",
      description: "Live performance at Rimon School"
    }
  ];

  const openVideoOnYouTube = (video) => {
    window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank');
  };

  const playVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="music-videos">      
      <div className="videos-container">
        {musicVideos.map((video) => (
          <div key={video.id} className="video-item">
            <div className="video-embed">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="video-info">
              <h3 className="video-name">{video.title}</h3>
            </div>
            
            <div className="video-actions">
              <button 
                className="video-play-btn"
                onClick={() => playVideo(video)}
                title="Play video in modal"
              >
                ▶️ Play Fullscreen
              </button>
              <button 
                className="video-youtube-btn"
                onClick={() => openVideoOnYouTube(video)}
                title="Open on YouTube"
              >
                📺 Open on YouTube
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeVideo}>✕</button>
            <h3>{selectedVideo.title}</h3>
            <div className="video-player">
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-modal-actions">
              <button 
                className="youtube-btn primary"
                onClick={() => openVideoOnYouTube(selectedVideo)}
              >
                📺 Open on YouTube
              </button>
              <button 
                className="close-modal-btn"
                onClick={closeVideo}
              >
                ✕ Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="videos-info">
        <p className="info-text">
          📺 All videos are embedded from YouTube for the best viewing experience
        </p>
        <p className="help-text">
          Click "Play Fullscreen" to watch in a larger modal, or "Open on YouTube" to view on YouTube
        </p>
      </div>
    </div>
  );
};

export default MusicVideos;
