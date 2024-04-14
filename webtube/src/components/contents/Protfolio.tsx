import React from "react";
import { portfolioText } from "../../data/portfolio";
import { Link } from "react-router-dom";

export const Protfolio = () => {
  return (
    <section id="webd">
      <h2>웹디자인기능사 이걸로~</h2>
      <div className="video__inner">
        {portfolioText.map((video, key) => (
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

export default Protfolio;
