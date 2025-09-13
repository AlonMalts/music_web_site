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

  const openStreamingPlatform = (platform, songTitle, artist) => {
    const searchQuery = encodeURIComponent(`${songTitle} ${artist}`);
    let url = '';
    
    switch (platform) {
      case 'youtube':
        url = `https://music.youtube.com/search?q=${searchQuery}`;
        break;
      case 'spotify':
        url = `https://open.spotify.com/search/${searchQuery}`;
        break;
      case 'apple':
        url = `https://music.apple.com/search?term=${searchQuery}`;
        break;
      default:
        return;
    }
    
    window.open(url, '_blank');
  };

  const openPlaylist = (playlistUrl) => {
    window.open(playlistUrl, '_blank');
  };

  return (
    <div className="music-library">
      <h2>Music Library</h2>
      
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
                        <h4 className="song-title">{release.title}</h4>
                        <p className="song-artist">{release.artist}</p>
                        <div className="song-tags">
                          {release.genre && <span className="genre">{release.genre}</span>}
                          {release.year && <span className="year">{release.year}</span>}
                        </div>
                      </div>
                      <div className="streaming-links">
                        <button 
                          className="stream-btn youtube-btn"
                          onClick={() => openStreamingPlatform('youtube', release.title, release.artist)}
                          title="Search on YouTube Music"
                        >
                          🎵
                        </button>
                        <button 
                          className="stream-btn spotify-btn"
                          onClick={() => openStreamingPlatform('spotify', release.title, release.artist)}
                          title="Search on Spotify"
                        >
                          🎧
                        </button>
                        <button 
                          className="stream-btn apple-btn"
                          onClick={() => openStreamingPlatform('apple', release.title, release.artist)}
                          title="Search on Apple Music"
                        >
                          🍎
                        </button>
                      </div>
                    </div>
                    
                    {/* Bottom Row: Play Controls */}
                    <div className="play-controls">
                      <button 
                        className="play-btn"
                        onClick={() => playSong(release.downloadUrl, release.id)}
                      >
                        {playingSongId === release.id && isPlaying ? '⏸️ Pause' : '▶️ Play'}
                      </button>
                      
                      {playingSongId === release.id && currentSong && (
                        <div className="audio-player-container">
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
            {favoritePlaylists.length === 0 ? (
              <div className="empty-state">
                <p>No favorite playlists added yet.</p>
                <p className="help-text">Add your favorite playlists from Spotify, Apple Music, etc.</p>
              </div>
            ) : (
              <div className="playlists-list">
                {favoritePlaylists.map((playlist) => (
                  <div key={playlist.id} className="playlist-item">
                    <div className="playlist-info">
                      <h4>{playlist.name}</h4>
                      <p className="platform">{playlist.platform}</p>
                      {playlist.description && <p className="description">{playlist.description}</p>}
                      {playlist.trackCount && <span className="track-count">{playlist.trackCount} tracks</span>}
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