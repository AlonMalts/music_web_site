import React from 'react';
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import WorkScreen from "../WorkScreen/WorkScreen";
import Footer from "../Footer/Footer";

const MusicWebSite = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Categories />
      <WorkScreen />
      <Footer />
    </div>
  );
};

export default MusicWebSite;
