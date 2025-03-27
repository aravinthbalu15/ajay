import React, { useState, useEffect } from "react";
import BackgroundSlider from "./Background";
import Event from "../components/Event";
import President from "../components/President";
import History from "../components/History";
import Quotes from "../components/Quotes";
import VIsitingTime from "../components/VIsitingTime";
import ImageLink from "../components/ImageLink";
import VIdeoLink from "../components/VIdeoLink";
import Family from "../components/Family";
import ParticipateStructers from "../components/participative-structures/ParticipateStructers";

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowContent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <BackgroundSlider />
      <Event />
      <President />
      <History />
      <Quotes />
      <div className={`content ${showContent ? "visible" : "hidden"}`}>
        {/* This is the Schedule Section */}
        <div id="schedule">
          <VIsitingTime />
        </div>
      </div>
      <ImageLink />
      <VIdeoLink />
      <Family />
      <ParticipateStructers />
    </div>
  );
};

export default Home;
