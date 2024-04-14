import React from "react";
import Main from "../components/section/Main";
import Today from "../components/contents/Today";
import Developer from "../components/contents/Developer";

import VideoSlider from "../components/video/VideoSlider";
import { webdText } from "../data/webd";
import { websiteText } from "../data/website";
import { gsapText } from "../data/gsap";
import { portfolioText } from "../data/portfolio";
import { youtubeText } from "../data/youtube";

const Home = () => {
  return (
    <Main
      title="웹스토리보이 유튜브"
      description="웹스토리보이 유튜버 사이트에 오신 것을 환영합니다."
    >
      <Today />
      <Developer />
      <VideoSlider
        videos={webdText}
        title="웹디자인 기능사 준비는 이걸로~"
        id="web"
      />
      <VideoSlider
        videos={websiteText}
        title="웹표준 기초 이걸로~"
        id="website"
      />
      <VideoSlider videos={gsapText} title="GSAP 이걸로~" id="website" />
      <VideoSlider
        videos={portfolioText}
        title="포트폴리오 이걸로~"
        id="website"
      />
      <VideoSlider videos={youtubeText} title="YOUTUBE 이걸로~" id="website" />
    </Main>
  );
};

export default Home;
