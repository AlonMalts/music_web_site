import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import "./MusicVideos.css";

const MusicVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [musicVideos, setMusicVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch music videos from Firebase
  useEffect(() => {
    const fetchMusicVideos = async () => {
      try {
        const videosCollection = collection(db, "musicVideos");
        const videosSnapshot = await getDocs(videosCollection);

        const videosData = videosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMusicVideos(videosData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching music videos:", error);
        setLoading(false);
      }
    };

    fetchMusicVideos();
  }, []);

  const openVideoOnYouTube = (video) => {
    window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank');
  };

  const playVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  if (loading) {
    return (
      <div className="music-videos">
        <div className="loading-container">
          <p>Loading videos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="music-videos">
      <div className="music-videos-layout">
        {/* Left Sidebar - YouTube Channel Info */}
        <div className="channel-sidebar">
          <div className="channel-info">
            <h2>🎬 My YouTube Channel</h2>
            <p className="channel-description">
              Welcome to my music channel! Here you'll find original compositions, 
              covers, live performances, and behind-the-scenes content. I create 
              music across various genres including jazz, blues, funk, and contemporary styles.
            </p>
            <div className="channel-stats">
              <p><strong>Content:</strong> Original music, covers, tutorials</p>
              <p><strong>Genres:</strong> Jazz, Blues, Funk, Contemporary</p>
              <p><strong>Updates:</strong> New videos every week</p>
            </div>
            <a 
              href="https://www.youtube.com/@alonmalts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="youtube-channel-btn"
            >
              📺 Visit My YouTube Channel
            </a>
          </div>
        </div>

        {/* Right Content - Videos (2/3 of screen) */}
        <div className="videos-main-content">
          <div className="videos-container">
            {musicVideos.length === 0 ? (
              <div className="empty-state">
                <p>No music videos found.</p>
                <p className="help-text">Add videos to your Firebase collection to see them here.</p>
              </div>
            ) : (
              musicVideos.map((video) => (
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
              ))
            )}
          </div>
        </div>
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

    </div>
  );
};

export default MusicVideos;
