import React from "react";
import { developerText } from "../../data/developer";
import { Link } from "react-router-dom";

interface Developer {
  img: string;
  name: string;
  channelAddress: string;
  channelId: string;
}

export const Developer: React.FC<Developer> = () => {
  return (
    <section id="developer">
      <h2>추천 개발자 소개요~</h2>
      <div className="developer__inner overflow">
        {developerText.map((developer, key) => (
          <div className="developer" key={key}>
            <div className="developer__img play__icon">
              <Link to={`/channel/${developer.channelId}`}>
                <img src={developer.img} alt={developer.name} />
              </Link>
            </div>
            <div className="developer__info">
              <Link to={`/channel/${developer.channelId}`}>
                {developer.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Developer;
