import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import splitting from "splitting";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "animate.css";
import Svvg from "../JS/svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
gsap.registerPlugin(ScrollTrigger);
function Project01() {
  useEffect(() => {
    splitting({ target: ".about" });
    splitting({ target: ".work" });
    splitting({ target: ".contact" });
    splitting({ target: ".Web" });
    splitting({ target: ".kim" });
    splitting({ target: ".port" });
  }, []);

  const [prevScrollTop, setPrevScrollTop] = useState(0);
  const [nowScrollTop, setNowScrollTop] = useState(0);

  const handelScroll = () => {
    setNowScrollTop(window.scrollY);
  };

  const header = document.querySelector(".header");
  useEffect(() => {
    if (nowScrollTop > prevScrollTop) {
      header?.classList.add("active");
    } else {
      header?.classList.remove("active");
    }
    setPrevScrollTop(nowScrollTop);
  }, [nowScrollTop]);

  useEffect(() => {
    const text = document.querySelectorAll(".mainText p span .char");
    let i = 0;
    const start = setInterval(() => {
      if (i < text.length) {
        const texts = text[i];
        texts.classList.add("down");
        i++;
      } else {
        clearInterval(start);
      }
    }, 200);

    const path = document.getElementById("svgAni01");

    let svgLength = path?.getBoundingClientRect().width;
    let svgLength2 = path?.getBoundingClientRect().height;
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".con01",
        start: "0% 80%",
        end: "100% 100%",
        scrub: 1,
        markers: true,
      },
    });
    tl.to(
      ".wrap",
      {
        backgroundColor: "#999",
        color: "blue",
        ease: "none",
        duration: 5,
      },
      0
    );

    tl.fromTo(
      ".videoWrap video",
      {
        clipPath: "inset(60% 60% 60% 60% round 30%)",
      },
      { clipPath: "inset(0% 0% 0% 0% round 0%)", ease: "none", duration: 10 },
      0
    );
  }, []);

  window.addEventListener("scroll", handelScroll);

  return (
    <>
      <Svvg />
      <header className="Project01">
        <div className="headerBox">
          <div className="header">
            <Link to={"/Project01"} className="logo en">
              <span className="en2">J.young</span>Portfolio
            </Link>
            <nav className="gnb en">
              <ul>
                <li>
                  <a href="#" className="about">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="work">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#" className="contact">
                    Contact
                  </a>
                </li>
              </ul>
              <span className="a"></span>
              <span className="b"></span>
            </nav>
          </div>
        </div>
      </header>
      <section className="visual en motion wrap">
        <div className="mainText">
          <p className="Web">
            <span>Web Publisher</span>
          </p>
          <p className="kim">
            <span>Kim GangYeon</span>
          </p>
          <p className="kim">
            <span>Portfolio</span>
          </p>
        </div>
        <div className="subText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          <br className="mo" />
          perferendis voluptas laudantium? Quos, doloremque dignissimos. Sed
          <br className="mo" />
          saepe earum, labore perspiciatis, eos quia expedita praesentium eius
          <br className="mo" />
          odit, assumenda accusantium suscipit atque?
        </div>
        <div className="svgAni">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              id="svgAni01"
              d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
            />
          </svg>
        </div>
        <div className="scroll">Scroll Down</div>
      </section>
      <section className="con01">
        <div className="videoWrap">
          <video autoPlay muted loop playsInline>
            <source src="/videos/prada.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="title en">
          <h2>
            <span className="en2">Creativeness</span>
            is all you need
            <br />
            for <span className="en">digital design</span>
          </h2>
        </div>
      </section>
    </>
  );
}

export default Project01;
