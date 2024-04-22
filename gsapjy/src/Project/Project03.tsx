import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function Project03() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "0% 50%",
        end: "30% 0%",
        // markers: true,
        scrub: 1,
      },
    });
    tl.fromTo(
      ".circle",
      {
        width: "0",
        height: "0",
        duration: 10,
        ease: "elastic",
        top: "3%",
      },
      {
        width: "2500px",
        height: "2500px",
        duration: "10",
        top: "30%",
      },
      0
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".con02 .textBox",
        start: "0% 80%",
        end: "100%, 80%",
        scrub: 1,
        markers: true,
      },
    });
    tl2.fromTo(
      ".textBox",
      {
        top: "50%",
        duration: "5",
        ease: "elastic",
        opacity: "0",
      },
      {
        duration: "5",
        ease: "none",
        opacity: "1",
        top: "40%",
      },
      0
    );
  }, []);
  return (
    <>
      <div className="Project03">
        <section className="con01">
          <h2>
            <span>GSAP</span>
            SCROLLTRIGGER
          </h2>
        </section>
        <section className="con02">
          <span className="circle"></span>
          <div className="textBox">
            <p>
              our releases <br />
              get a feeling <br />
              for the latest <br />
              selected sound <br />
            </p>
          </div>
        </section>
        <section className="con03">
          <h2>ScrollTrigger</h2>
        </section>
      </div>
    </>
  );
}
export default Project03;
