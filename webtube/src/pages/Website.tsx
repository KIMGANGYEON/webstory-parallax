import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import { websiteText } from "../data/website";
import VideoCard from "../components/video/VideoCard";

const Website = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const todayPageClass = loading ? "isLoading" : "isLoaded";
  return (
    <Main
      title="웹표준 사이트"
      description="웹표준 사이트 튜토리얼 강의입니다."
    >
      <section id="websitePage" className={todayPageClass}>
        <h2>웹사이트 기초 강의요~</h2>
        <div className="video__inner">
          <VideoCard videos={websiteText} />
        </div>
      </section>
    </Main>
  );
};

export default Website;
