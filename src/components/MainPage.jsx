import React from "react";
import Footer from "./Footer";
import HeroPage from "./HeroPage";
import Navbar from "./Navbar";
import Topic from "./Topic";
import TrendingPage from "./TrendingPage";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <HeroPage></HeroPage>
      <TrendingPage />
      <Topic />
      <Footer />
    </div>
  );
};

export default MainPage;
