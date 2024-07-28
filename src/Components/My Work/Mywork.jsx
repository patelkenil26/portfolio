import React from "react";
import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import linkIcon from "../../assets/icon-link.svg";
import githubIcon from "../../assets/icon-github.svg";
const Mywork = () => {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="project-section">
        {mywork_data.map((projects, index) => {
          return (
           <div
            className="project-container"
           >
              <div className="project-images">
                <img key={index} src={projects.projectIcon} alt=""></img>
              </div>

              <div className="project-about">
                <div className="project-title">
                  {projects.title}
                </div>

                <div className="project-desc">
                  {projects.description}
                </div>

                <div className="project-links">
                  <a href={projects.livelink} className="project-link" target="_blank">
                    <img src={linkIcon} alt="linkicon" />
                    Live Link
                  </a>
                  <a href={projects.githublink} className="project-github" target="_blank">
                    <img src={githubIcon} alt="linkicon" width="24px"/>
                    Github Link
                  </a>
                </div>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mywork;
