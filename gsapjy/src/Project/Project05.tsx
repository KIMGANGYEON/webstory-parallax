import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Project05() {
  const workRef = useRef<HTMLDivElement>(null);
  //   const work = document.querySelector(".work");
  const list = gsap.utils.toArray(".work > ul > li");

  useEffect(() => {
    const work = workRef.current;
    gsap.to(list, {
      xPercent: -100 * (list.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: work,
        pin: true,
        scrub: 1,
        start: "center center",
        end: "300%",
        markers: true,
      },
    });
  }, []);
  return (
    <div className="project05">
      <section className="visual2">
        <div className="inner">
          <div className="textBox">
            <p className="title">
              My <span>Work</span>
            </p>
            <p className="subTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              odit aperiam aspernatur dicta esse quod voluptas, enim rem nostrum
            </p>
            <p className="text">
              ipsam! Nisi, nesciunt sapiente dolor exercitationem porro
              architecto veniam sed numquam.
            </p>
          </div>
          {/* <div className="aniBox">
            <img src="https://source.unsplash.com/random" />
            <img src="https://source.unsplash.com/random" />
          </div> */}
        </div>
      </section>
      <section className="work" ref={workRef}>
        <ul>
          <li className="name">
            <a href="#">
              <div className="imgBox2">
                <img src="https://source.unsplash.com/random" alt="" />
              </div>
              <div className="textBox2">
                <p className="title">Site name</p>
                <p className="text">UI/UX Design, Web Publishing</p>
              </div>
            </a>
          </li>
          <li className="name">
            <a href="#">
              <div className="imgBox2">
                <img src="https://source.unsplash.com/random" alt="" />
              </div>
              <div className="textBox2">
                <p className="title">Site name</p>
                <p className="text">UI/UX Design, Web Publishing</p>
              </div>
            </a>
          </li>
          <li className="name">
            <a href="#">
              <div className="imgBox2">
                <img src="https://source.unsplash.com/random" alt="" />
              </div>
              <div className="textBox2">
                <p className="title">Site name</p>
                <p className="text">UI/UX Design, Web Publishing</p>
              </div>
            </a>
          </li>
          <li className="name">
            <a href="#">
              <div className="imgBox2">
                <img src="https://source.unsplash.com/random" alt="" />
              </div>
              <div className="textBox2">
                <p className="title">Site name</p>
                <p className="text">UI/UX Design, Web Publishing</p>
              </div>
            </a>
          </li>
          <li className="name">
            <a href="#">
              <div className="imgBox2">
                <img src="https://source.unsplash.com/random" alt="" />
              </div>
              <div className="textBox2">
                <p className="title">Site name</p>
                <p className="text">UI/UX Design, Web Publishing</p>
              </div>
            </a>
          </li>
          <li className="name">
            <a href="#">
              <div className="imgBox2">
                <img src="https://source.unsplash.com/random" alt="" />
              </div>
              <div className="textBox2">
                <p className="title">Site name</p>
                <p className="text">UI/UX Design, Web Publishing</p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default Project05;
