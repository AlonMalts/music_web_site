import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; // Импорт функций Firestore
import { db } from "../../firebase/firebase"; // Импорт Firestore инстанса
import "./Releases.css";

const Releases = () => {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    const fetchReleases = async () => {
      const releasesCollection = collection(db, "releases");
      const releasesSnapshot = await getDocs(releasesCollection);

      const releasesData = releasesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setReleases(releasesData);
    };

    fetchReleases();
  }, []);

  return (
    <div>
      <h3>Releases</h3>
      <ul>
        {releases.map((release) => (
          <li key={release.id}>
            {release.title} by {release.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Releases;