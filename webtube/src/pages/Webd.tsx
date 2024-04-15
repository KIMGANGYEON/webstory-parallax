import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import VideoCard from "../components/video/VideoCard";
import { webdText } from "../data/webd";

function Webd() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const todayPageClass = loading ? "isLoading" : "isLoaded";
  return (
    <Main
      title="웹디자인 기능사"
      description="웹디자인 기능사 튜토리얼 강의입니다."
    >
      <section id="webdPage" className={todayPageClass}>
        <h2>웹디자인 기능사~</h2>
        <div className="video__inner">
          <VideoCard videos={webdText} />
        </div>
      </section>
    </Main>
  );
}

export default Webd;
