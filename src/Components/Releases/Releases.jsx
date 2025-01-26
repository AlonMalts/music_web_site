import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; // Импорт функций Firestore
import { db } from "../../firebase/firebase"; // Импорт Firestore инстанса
import "./Releases.css";

const Releases = () => {
  const [releases, setReleases] = useState([]);
  const [currentSong, setCurrentSong] = useState(null); // Для текущей песни

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const releasesCollection = collection(db, "releases");
        const releasesSnapshot = await getDocs(releasesCollection);

        const releasesData = releasesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setReleases(releasesData);
      } catch (error) {
        console.error("Error fetching releases:", error);
      }
    };

    fetchReleases();
  }, []);

  const getDownloadLink = (filePath) => {
    const match = filePath.match(/file\/d\/(.*?)\/view/);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=download&id=${match[1]}`;
    }
    return filePath; // Если формат не соответствует, возвращается оригинальная ссылка
  };

  const playSong = (filePath) => {
    const downloadLink = getDownloadLink(filePath);
    setCurrentSong(downloadLink); // Устанавливаем ссылку для аудио
  };

  const downloadFile = (filePath) => {
    const downloadLink = getDownloadLink(filePath);
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = "song.mp3"; // Указываем имя для сохранения
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h3>Releases</h3>
      {releases.length === 0 ? (
        <p>No releases found. Check Firestore data or connection.</p>
      ) : (
        <ul>
          {releases.map((release) => (
            <li key={release.id}>
              {release.title} by {release.artist}{" "}
              <button onClick={() => playSong(release.filePath)}>Play</button>
              <button onClick={() => downloadFile(release.filePath)}>Download</button>
            </li>
          ))}
        </ul>
      )}
      {currentSong && (
        <div>
          <h4>Now Playing:</h4>
          <audio controls autoPlay>
            <source src="https://drive.google.com/uc?export=download&id=1PPb9-2ihtNJKBE0f4QlUC7sy6BmtCN3V" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default Releases;