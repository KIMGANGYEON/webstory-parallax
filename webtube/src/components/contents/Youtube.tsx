import React from "react";
import { youtubeText } from "../../data/youtube";
import { Link } from "react-router-dom";

export const Youtube = () => {
  return (
    <section id="webd">
      <h2>웹디자인기능사 이걸로~</h2>
      <div className="video__inner">
        {youtubeText.map((video, key) => (
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

export default Youtube;
