import React from "react";
import "./About2.css";
import theme_pettern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile-pic.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pettern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" className="about-profile-img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            
            <p>
              Frontend Developer with extensive experience in HTML, CSS,
              JavaScript, and ReactJS. Proven ability to deliver dynamic web
              projects, including a shopping cart, Spotify clone, portfolio, and
              e-commerce website. Proficient in NodeJS, ExpressJS, and MongoDB,
              with a strong understanding of full-stack development. Skilled in
              using Bootstrap, Tailwind CSS, Git, GitHub, Postman, and React
              Developer Tools. Certified in ReactJS and experienced with NodeJS
              from hands-on workshops. Ready to bring innovative solutions and a
              keen eye for detail to your team.
            </p>
          </div>

          {/* <div className="about-skills"> */}
          {/* <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwaind</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJs</p>
              <hr style={{ width: "90%" }} />
            </div> */}
        </div>
      </div>
      {/* <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr/>
        </div> */}
    </div>
  );
};

export default About;
