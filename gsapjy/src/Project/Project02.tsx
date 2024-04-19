import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function Project02() {
  function Project02() {
    useEffect(() => {}, []);
  }
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
