import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import { gsapText } from "../data/gsap";
import VideoCard from "../components/video/VideoCard";

const Gsap = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const todayPageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main title="GSAP 사이트" description="GSAP 사이트 튜토리얼 강의입니다.">
      <section id="GSAP" className={todayPageClass}>
        <h2>GSAP 강의요~</h2>
        <div className="video__inner">
          <VideoCard videos={gsapText} />
        </div>
      </section>
    </Main>
  );
};

export default Gsap;
