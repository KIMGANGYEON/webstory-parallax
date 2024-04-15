import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Video {
  img: string;
  name: string;
  channelAddress: string;
  channelId: string;
}

interface Developer {
  title: string;
  id: string;
  videos: Video[];
}

export const Developer: React.FC<Developer> = ({ videos, title, id }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  const developerClass = loading ? "isLoading" : "isLoaded";

  return (
    <section id={id} className={developerClass}>
      <h2>{title}</h2>
      <div className="developer__inner">
        <Swiper
          spaceBetween={15}
          slidesPerView={4}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 15,
            },
            1240: {
              slidesPerView: 8,
              spaceBetween: 15,
            },
            1640: {
              slidesPerView: 9,
              spaceBetween: 20,
            },
            2000: {
              slidesPerView: 10,
              spaceBetween: 20,
            },
          }}
        >
          {videos.map((developer, key) => (
            <SwiperSlide key={key}>
              <div className="developer">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Developer;
