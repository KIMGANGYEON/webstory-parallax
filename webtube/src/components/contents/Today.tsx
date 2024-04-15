import React, { useEffect, useState } from "react";

import { todayText } from "../../data/today";
import { Link } from "react-router-dom";

interface Video {
  img: string;
  title: string;
  desc: string;
  author: string;
  channelId: string;
  date: string;
  page: string;
}

interface Developer {
  id: string;
  videos: Video[];
}

export const Today: React.FC<Developer> = ({ videos, id }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  const todayClass = loading ? "isLoading" : "isLoaded";

  return (
    <section id={id} className={todayClass}>
      <div className="today__inner">
        <div className="today__thumb play__icon">
          <Link to={videos[0].page}>
            <img src={videos[0].img} alt={videos[0].title} />
          </Link>
        </div>
        <div className="today__text">
          <span className="today">today!</span>
          <h3 className="title">
            <Link to={videos[0].page}>{videos[0].title}</Link>
          </h3>
          <p className="desc">{videos[0].desc}</p>
          <div className="info">
            <span className="author">
              <Link to={`/channel/${videos[0].channelId}`}>
                {videos[0].author}
              </Link>
            </span>
            <span className="date">{videos[0].date}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Today;
