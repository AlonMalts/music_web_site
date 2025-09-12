import React, { useState } from "react";
import "./MusicVideos.css";

const MusicVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Music videos data from your Google Drive folder
  const musicVideos = [
    {
      id: 1,
      title: "Begin again (live Rimon 02.07)",
      filename: "Begin again (live Rimon 02.07).MOV",
      size: "74.2 MB",
      date: "Jul 2, 2024",
      driveUrl: "https://drive.google.com/drive/folders/1db8Z3EjcQ2ZLipL0Szmb93hFo10CyECP",
      embedUrl: "https://drive.google.com/file/d/1db8Z3EjcQ2ZLipL0Szmb93hFo10CyECP/preview"
    },
    {
      id: 2,
      title: "Blusette",
      filename: "blusette.mov",
      size: "80 MB",
      date: "Feb 27, 2024",
      driveUrl: "https://drive.google.com/drive/folders/1db8Z3EjcQ2ZLipL0Szmb93hFo10CyECP",
      embedUrl: "https://drive.google.com/file/d/1db8Z3EjcQ2ZLipL0Szmb93hFo10CyECP/preview"
    },
    {
      id: 3,
      title: "Ptitsi (2013)",
      filename: "Ptitsi (2013).mov",
      size: "248.6 MB",
      date: "Apr 27, 2024",
      driveUrl: "https://drive.google.com/drive/folders/1db8Z3EjcQ2ZLipL0Szmb93hFo10CyECP",
      embedUrl: "https://drive.google.com/file/d/1db8Z3EjcQ2ZLipL0Szmb93hFo10CyECP/preview"
    },
    {
      id: 4,
      title: "So tired (live Rimon 02.07)",
      filename: "So tired (live Rimon 02.07.MOV",
      size: "66.9 MB",
      date: "Jul 2, 2024",
      driveUrl: "https://drive.google.com/drive/folders/1db8Z3EjcQ2ZLipL0Szmb93hFo10CyECP",
      embedUrl: "https://drive.google.com/file/d/1db8Z3EjcQ2ZLipL0Szmb93hFo10CyECP/preview"
    }
  ];

  const openVideoInDrive = (video) => {
    window.open(video.driveUrl, '_blank');
  };

  const playVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="music-videos">
      <h2>🎬 Music Videos</h2>
      
      <div className="videos-container">
        {musicVideos.map((video) => (
          <div key={video.id} className="video-item">
            <div className="video-thumbnail">
              <div className="video-placeholder">
                <span className="play-icon">▶️</span>
                <p className="video-title">{video.title}</p>
              </div>
            </div>
            
            <div className="video-info">
              <h3 className="video-name">{video.title}</h3>
              <div className="video-details">
                <span className="video-size">{video.size}</span>
                <span className="video-date">{video.date}</span>
              </div>
            </div>
            
            <div className="video-actions">
              <button 
                className="play-btn"
                onClick={() => playVideo(video)}
                title="Play video"
              >
                ▶️ Play
              </button>
              <button 
                className="drive-btn"
                onClick={() => openVideoInDrive(video)}
                title="Open in Google Drive"
              >
                📁 Open in Drive
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
              <div className="video-placeholder-modal">
                <div className="video-info-modal">
                  <h4>🎬 {selectedVideo.title}</h4>
                  <p className="video-details-modal">
                    <span>📁 {selectedVideo.filename}</span>
                    <span>💾 {selectedVideo.size}</span>
                    <span>📅 {selectedVideo.date}</span>
                  </p>
                  <p className="video-instruction">
                    To watch this video, click "Open in Google Drive" below. 
                    The video will open in a new tab where you can play it directly.
                  </p>
                </div>
              </div>
            </div>
            <div className="video-modal-actions">
              <button 
                className="drive-btn primary"
                onClick={() => openVideoInDrive(selectedVideo)}
              >
                📁 Open in Google Drive
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
          📁 All videos are stored in your <a href="https://drive.google.com/drive/folders/1db8Z3EjcQ2ZLipL0Szmb93hFo10CyECP" target="_blank" rel="noopener noreferrer">Google Drive folder</a>
        </p>
        <p className="help-text">
          Click "Play" to watch videos directly, or "Open in Drive" to view them in Google Drive
        </p>
      </div>
    </div>
  );
};

export default MusicVideos;
