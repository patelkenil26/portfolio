// import React from "react";
// // import "./Hero.css";
// import "./Hero.css";
// import { Link } from "react-scroll";
// import profile_img from "../../assets/profile-pic.png";
// import Resume from "../../assets/doc/Resume.pdf";

// const Hero = () => {
//   return (
//     <div id="home" className="hero">
//       <br />
//       <br />

//         <h1>
//           <span>I'm Kenil Patel,</span> Full-Stack Developer
//         </h1>
//         <p>
//         </p>

//         <div className="hero-action">
//           <div className="hero-connect">
//             <Link
//               to="contact"
//               spy={true}
//               smooth={true}
//               offset={10}
//               duration={1500}
//             >
//               Connect With Me
//             </Link>
//           </div>

//           <div className="hero-resume">

//           <a
//                 className="button"
//                 href={Resume}
//                 download="KenilResume.pdf"
//               >
//                 My Resume
//           </a>
//           </div>
//         </div>

//       <div className="hero-img">
//         <div className="lootie">
//           <lottie-player
//             src="https://lottie.host/f3f0d88c-5528-44ac-bc9e-edf5c36e03a6/e6wWDBTzoY.json"
//             background="##FFFFFF"
//             speed="1"
//             loop
//             autoplay
//           ></lottie-player>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import "./Hero2.css";
import profile_img from "../../assets/profile-pic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from "../../assets/doc/Resume.pdf";
import { Link } from "react-scroll";


const Hero = () => {
  return (
    <div className="hero" id="home">
      <br />
      <br />
      <div className="profile-img">
      <lottie-player
        src="https://lottie.host/f3f0d88c-5528-44ac-bc9e-edf5c36e03a6/e6wWDBTzoY.json"
        background="##FFFFFF"
        speed="1"
        loop
        autoplay
      ></lottie-player>
      </div>
      <h1>
        <span>I'm Kenil Patel,</span>  Full Stack Web Developer.
      </h1>
      <p>
      "My goal is to develop websites that not only look great but also deliver outstanding user experiences"
      </p>
      <div className="hero-action">
      <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={10}
              duration={1500}
            >
              <div className="hero-connect">Connect With Me</div>
             </Link>

        <div className="hero-resume">
          <a className="button" href={Resume} download="Resume.pdf">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
