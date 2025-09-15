import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import "./Releases.css";

const Releases = () => {
  const [personalReleases, setPersonalReleases] = useState([]);
  const [favoritePlaylists, setFavoritePlaylists] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [playingSongId, setPlayingSongId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Default playlists including the user's Spotify playlist
  const defaultPlaylists = [
    {
      id: "chill-dnd",
      name: "Chill dnd",
      platform: "Spotify",
      description: "A relaxing playlist perfect for D&D sessions and chill moments",
      trackCount: "12 tracks",
      url: "https://open.spotify.com/playlist/1X4KVtzbCksJXdfE3ziOL9?si=579624e39b46481d"
    }
  ];

  useEffect(() => {
    const fetchPersonalReleases = async () => {
      try {
        const releasesCollection = collection(db, "personalReleases");
        const releasesSnapshot = await getDocs(releasesCollection);

        const releasesData = releasesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPersonalReleases(releasesData);
      } catch (error) {
        console.error("Error fetching personal releases:", error);
      }
    };

    const fetchFavoritePlaylists = async () => {
      try {
        const playlistsCollection = collection(db, "favoritePlaylists");
        const playlistsSnapshot = await getDocs(playlistsCollection);

        const playlistsData = playlistsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setFavoritePlaylists(playlistsData);
      } catch (error) {
        console.error("Error fetching favorite playlists:", error);
      }
    };

    fetchPersonalReleases();
    fetchFavoritePlaylists();
  }, []);

  const playSong = (downloadUrl, songId) => {
    console.log('Attempting to play:', downloadUrl);
    
    // If the same song is already playing, toggle pause/play
    if (playingSongId === songId && currentSong === downloadUrl) {
      setIsPlaying(!isPlaying);
      return;
    }
    
    // If a different song is playing, stop it and start the new one
    setCurrentSong(downloadUrl);
    setPlayingSongId(songId);
    setIsPlaying(true);
  };

  const stopSong = () => {
    setCurrentSong(null);
    setPlayingSongId(null);
    setIsPlaying(false);
  };

  const formatReleaseDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}.${month}.${year}`;
  };

  const openStreamingLink = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const openPlaylist = (playlistUrl) => {
    window.open(playlistUrl, '_blank');
  };

  return (
    <div className="music-library">      
      <div className="library-container">
        {/* Personal Releases Column */}
        <div className="library-column">
          <h3>🎵 My Releases</h3>
          <div className="releases-section">
            {personalReleases.length === 0 ? (
              <div className="empty-state">
                <p>No personal releases found.</p>
                <p className="help-text">Upload your music to Firebase Storage to see them here.</p>
              </div>
            ) : (
              <div className="releases-list">
                {personalReleases.map((release) => (
                  <div key={release.id} className="release-item">
                    {/* Top Row: Song Info and Streaming Links */}
                    <div className="song-header">
                      <div className="song-info">
                        <h4 className="song-title">
                          {release.title}
                          {release.artist && <span className="song-artist"> by {release.artist}</span>}
                        </h4>
                        <p className="song-album">{release.album}</p>
                        <div className="song-tags">
                          {release.releaseDate && <span className="release-date">{formatReleaseDate(release.releaseDate)}</span>}
                        </div>
                      </div>
                      <div className="streaming-links">
                        {release.youtubeLink && (
                          <button 
                            className="stream-btn youtube-btn"
                            onClick={() => openStreamingLink(release.youtubeLink)}
                            title="Open on YouTube"
                          >
                            🎵
                          </button>
                        )}
                        {release.spotifyLink && (
                          <button 
                            className="stream-btn spotify-btn"
                            onClick={() => openStreamingLink(release.spotifyLink)}
                            title="Open on Spotify"
                          >
                            🎧
                          </button>
                        )}
                        {release.appleMusicLink && (
                          <button 
                            className="stream-btn apple-btn"
                            onClick={() => openStreamingLink(release.appleMusicLink)}
                            title="Open on Apple Music"
                          >
                            🍎
                          </button>
                        )}
                      </div>
                    </div>
                    
                    {/* Bottom Row: Play Controls */}
                    <div className="play-controls">
                      {!(playingSongId === release.id && currentSong) && (
                        <button 
                          className="play-btn"
                          onClick={() => playSong(release.downloadUrl, release.id)}
                        >
                          Play
                        </button>
                      )}
                      
                      {playingSongId === release.id && currentSong && (
                        <div className="audio-player-container">
                          <div className="audio-controls-wrapper">
                            <audio 
                              ref={(audio) => {
                                if (audio) {
                                  if (isPlaying) {
                                    audio.play();
                                  } else {
                                    audio.pause();
                                  }
                                }
                              }}
                              controls 
                              className="audio-controls"
                              onError={(e) => {
                                console.error('Audio error:', e);
                              }}
                              onPlay={() => setIsPlaying(true)}
                              onPause={() => setIsPlaying(false)}
                            >
                              <source src={currentSong} type="audio/mpeg" />
                              <source src={currentSong} type="audio/mp3" />
                              <source src={currentSong} type="audio/wav" />
                              Your browser does not support the audio element.
                            </audio>
                            <button 
                              className="stop-btn"
                              onClick={stopSong}
                              title="Stop and hide player"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Favorite Playlists Column */}
        <div className="library-column">
          <h3>🎶 My Playlists</h3>
          <div className="playlists-section">
            {[...defaultPlaylists, ...favoritePlaylists].length === 0 ? (
              <div className="empty-state">
                <p>No favorite playlists added yet.</p>
                <p className="help-text">Add your favorite playlists from Spotify, Apple Music, etc.</p>
              </div>
            ) : (
              <div className="playlists-list">
                {[...defaultPlaylists, ...favoritePlaylists].map((playlist) => (
                  <div key={playlist.id} className="playlist-item">
                    <div className="playlist-info">
                      <h4>{playlist.name}</h4>
                      <p className="platform">{playlist.platform}</p>
                      {playlist.description && <p className="description">{playlist.description}</p>}
                      {playlist.trackCount && <span className="track-count">{playlist.trackCount}</span>}
                    </div>
                    <div className="playlist-actions">
                      <button 
                        className="open-btn"
                        onClick={() => openPlaylist(playlist.url)}
                      >
                        🎵 Open Playlist
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Releases;