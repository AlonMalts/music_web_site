import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore"; // Подключение Firestore
import { getStorage, ref, getDownloadURL } from "firebase/storage"; // Подключение Storage
import "./ReleasesComponent.css";

const Releases = () => {
  const [releases, setReleases] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  // Инициализация Firestore
  const db = getFirestore();
  const storage = getStorage();

  useEffect(() => {
    const fetchReleases = async () => {
      const releasesCollection = collection(db, "releases"); // Предположим, что коллекция называется "releases"
      const releasesSnapshot = await getDocs(releasesCollection);

      const releasesData = await Promise.all(
        releasesSnapshot.docs.map(async (doc) => {
          const data = doc.data();
          const musicUrl = await getDownloadURL(ref(storage, data.filePath)); // Скачивание URL для трека
          return { ...data, id: doc.id, url: musicUrl };
        })
      );

      setReleases(releasesData);
    };

    fetchReleases();
  }, [db, storage]);

  const playTrack = (url) => {
    setCurrentTrack(url);
  };

  return (
    <div className="releases">
      <h3>Your Music Releases</h3>
      <ul>
        {releases.map((release) => (
          <li key={release.id} className="release-item">
            <div>
              <strong>{release.title}</strong> by {release.artist}
            </div>
            <button onClick={() => playTrack(release.url)}>Play</button>
          </li>
        ))}
      </ul>

      {currentTrack && (
        <div className="audio-player">
          <audio controls autoPlay>
            <source src={currentTrack} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default Releases;