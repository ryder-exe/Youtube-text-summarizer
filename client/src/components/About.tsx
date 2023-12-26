import Background from "./Background";
import "../stylesheet/About.css";
import img from "../squares.png";
import { gsap, Expo } from "gsap";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    const showtext = () => {
      gsap.to(".mainbox", {
        duration: 0.8,
        opacity: 1,
        ease: Expo.easeInOut,
      });
      gsap.to(".mainboximg", {
        duration: 2.5,
        opacity: 1,
        ease: Expo.easeInOut,
      });
      gsap.to("p", {
        duration: 3,
        opacity: 1,
        top: 0,
        ease: Expo.easeInOut,
      });
      gsap.to("h6", {
        duration: 4,
        opacity: 1,
        ease: Expo.easeInOut,
      });
    };
    showtext();

    return () => {};
  }, []);
  return (
    <>
      <div className="Aboutmain">
        <div className="mainbox">
          <div className="mainboximg">
            <img src={img} />
          </div>
          <div className="text">
            <p>
              Caption Reader 23 is a dynamic web application crafted with Flask
              and React, fostering user-friendly interactions. The integration
              of transformers facilitates efficient YouTube video transcript
              summarization, enhancing content accessibility. Enriching the user
              interface, GSAP orchestrates seamless animations. Leveraging the
              YouTube Transcript API, real-time feedback is delivered through
              Toast notifications, ensuring users stay informed during
              processing. While the current implementation achieves core
              functionality, there's a notable opportunity for refining the
              codebase to optimize performance. Additionally, Caption Reader 23
              is poised for evolution, with potential feature enhancements on
              the horizon, making it a versatile tool for streamlined video
              content consumption and summarization on the web.
            </p>
            <h6>
              Developed By <span>Faiz Khan</span>
            </h6>
          </div>
        </div>
      </div>
      <Background />
    </>
  );
}
export default About;
