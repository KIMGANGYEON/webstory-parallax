import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function Project02() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".con02 ul",
        start: "top 90%",
        end: "20% 100%",
        scrub: 4,
        // markers: true,
      },
    });
    const cards = document.querySelectorAll(".con02 li");

    cards.forEach((card, index) => {
      tl.to(
        card,
        {
          y: "-400px",
          duration: 1,
          ease: "none",
        },
        index * 0.2
      );
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".con03",
        start: "top 100%",
        end: "100% 100%",
        scrub: 3,
        markers: true,
      },
    });
    tl.fromTo(
      ".con03 span.a",
      {
        y: "400%",
      },
      { y: "0" },
      1.2
    );
    tl.fromTo(
      ".con03 span.b",
      {
        y: "400%",
      },
      { y: "0" },
      1.5
    );
    tl.fromTo(
      ".con03 span.c",
      {
        y: "400%",
      },
      { y: "0" },
      1.7
    );
    tl.fromTo(
      ".con03 span.d",
      {
        y: "400%",
      },
      { y: "0" },
      1.9
    );
    tl.fromTo(
      ".con03 span.e",
      {
        y: "400%",
      },
      { y: "0" },
      2.1
    );
  });

  return (
    <>
      <div className="Project02">
        <section className="con01">
          <h2 className="title">
            <span>GSAP</span>
            ScrollTrigger
          </h2>
        </section>
        <section className="con02">
          <ul>
            <li className="card">Card 1</li>
            <li className="card">Card 2</li>
            <li className="card">Card 3</li>
            <li className="card">Card 4</li>
          </ul>
        </section>
        <section className="con03">
          <h2 className="contitle">section 03</h2>
          <span className="a">Card 1</span>
          <span className="b">Card 2</span>
          <span className="c">Card 3</span>
          <span className="d">Card 4</span>
          <span className="e">Card 5</span>
        </section>
      </div>
    </>
  );
}
export default Project02;
