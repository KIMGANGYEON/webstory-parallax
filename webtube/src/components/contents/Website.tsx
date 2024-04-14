import React from "react";
import { websiteText } from "../../data/website";
import { Link } from "react-router-dom";

interface Webd {
  title: string;
  img: string;
  author: string;
  videoId: string;
  date: string;
  channelId: string;
}

export const Website = () => {
  return (
    <section id="webd">
      <h2>웹표준 기초 이걸로~</h2>
      <div className="video__inner">
        {websiteText.map((video, key) => (
          <div className="video" key={key}>
            <div className="video__thumb play__icon">
              <Link to={`/video/${video.videoId}`}>
                <img src={video.img} alt={video.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Website;
