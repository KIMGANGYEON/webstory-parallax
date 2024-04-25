import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

function Project04() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".visual",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        // pinSpacing: false,
        markers: true,
      },
    });

    tl.to(
      ".visual h1",
      {
        opacity: "1",
        ease: "none",
        duration: "10",
      },
      5
    );
    tl.to(
      ".visual img",
      {
        scale: "0.4",
        ease: "none",
        duration: "10",
        opacity: "0.3",
      },
      5
    );
  }, []);

  return (
    <div className="project04">
      <section className="visual">
        <img src="https://source.unsplash.com/random" alt="" />
        <h1>
          <span>My hobby is travel</span>Go to trailand
        </h1>
      </section>
      <section className="infoProject">
        <div className="inner">
          <p className="imgBox">
            <img src="https://source.unsplash.com/random" alt="" />
          </p>
          <div className="textBox">
            <span className="title">recommended destination</span>
            <span className="text">Thailand</span>
            <span className="title">Travel eriod</span>
            <span className="text">5 days 3 nights</span>
            <span className="title"> cisiting city</span>
            <span className="text">asfasfasd</span>
            <span className="title">qrqwerqewr</span>
            <span className="text">asfzxvzxvzxasdf</span>
            <span className="title">aaaaaaaaaaaaaa</span>
            <span className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem reprehenderit dicta enim molestiae laudantium
              repudiandae delectus sit voluptatum quidem, quo recusandae fuga.
              Temporibus atque dolorem quisquam. Aspernatur debitis blanditiis
              asperiores!
            </span>
          </div>
        </div>
      </section>
      <section className="concept">
        <div className="inner">
          <ul>
            <li className="imgBox">
              <img src="https://source.unsplash.com/random" alt="" />
            </li>
            <li className="imgBox">
              <img src="https://source.unsplash.com/random" alt="" />
            </li>
            <li className="imgBox">
              <img src="https://source.unsplash.com/random" alt="" />
            </li>
          </ul>
          <div className="textBox">
            <span className="title">Thailand</span>
            <span className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate vel tempora eius, quos deleniti incidunt reiciendis
              numquam at. Quo iste porro aspernatur eveniet obcaecati quisquam,
              in perspiciatis reiciendis optio alias.
            </span>
          </div>
          <ul className="size">
            <li>
              <p className="imgBox">
                <img src="https://source.unsplash.com/random" alt="" />
              </p>
            </li>
            <li>
              <p className="imgBox">
                <img src="https://source.unsplash.com/random" alt="" />
              </p>
            </li>
            <li>
              <p className="imgBox">
                <img src="https://source.unsplash.com/random" alt="" />
              </p>
            </li>
          </ul>
          <div className="textBox size">
            <span className="title">
              Let's go to <b>Thailland</b>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Project04;
