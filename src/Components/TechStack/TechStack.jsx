import React from "react";
import "./TechStack.css";
import theme_pettern from "../../assets/theme_pattern.svg";
import htmlIcon from "../../assets/icon-html.svg";
import cssIcon from "../../assets/icon-css.svg";
import jsIcon from "../../assets/icon-js.svg";
import reactIcon from "../../assets/icon-react.svg";
import bootstrapIcon from "../../assets/icon-bootstrap.svg";
import nodejsIcon from "../../assets/icon-nodejs.svg";
import experssIcon from "../../assets/icon-express.svg";
import mongodbIcon from "../../assets/mongodb-svg.svg";
import mysqlIcon from "../../assets/icon-mysql.svg";
import springIcon from "../../assets/icon-spring.svg";
import hibernateIcon from "../../assets/icon-hibernate.svg";
import javaIcon from "../../assets/icon-java.svg";
import gitIcon from "../../assets/icon-git.svg";
import githubIcon from "../../assets/icon-github.svg";
import vscodeIcon from "../../assets/icon-vscode.svg";
import viteIcon from "../../assets/icon-vite.svg";
const TechStack = () => {
  return (
    <div id="tachstack" className="techstack">
      <div className="techstack-title">
        <h1>My Tech Stack</h1>
        <img src={theme_pettern} alt="" />
      </div>

      <div className="techstack-section">
        <div className="techstack-para">
          <p>Technologies I've been working with recently</p>
        </div>

        <div className="techstack-icons">
          <div className="techstack-icon html">
            <span className="text">HTML</span>
            <img src={htmlIcon} alt="" />
          </div>
          <div className="techstack-icon css">
            <span className="text">CSS</span>
            <img src={cssIcon} alt="" />
          </div>
          <div className="techstack-icon bootstrap">
          <span className="text">BootStrap</span>

            <img src={bootstrapIcon} alt="" />
          </div>
          <div className="techstack-icon js">
          <span className="text">JavaScript</span>

            <img src={jsIcon} alt="" />
          </div>
          <div className="techstack-icon react">
          <span className="text">ReactJs</span>

            <img src={reactIcon} alt="" />
          </div>

          <div className="techstack-icon nodejs">
          <span className="text">Nodejs</span>

            <img src={nodejsIcon} alt="" />
          </div>
          <div className="techstack-icon express">
          <span className="text">ExpressJs</span>

            <img src={experssIcon} alt="" />
          </div>
          <div className="techstack-icon mongodb">
          <span className="text">MongoDB</span>

            <img src={mongodbIcon} alt="" />
          </div>
          <div className="techstack-icon">
          <span className="text">MySQL</span>

            <img src={mysqlIcon} alt="" />
          </div>
          <div className="techstack-icon">
          <span className="text">JAVA</span>

            <img src={javaIcon} alt="" />
          </div>
          <div className="techstack-icon">
          <span className="text">Hibernate</span>

            <img src={hibernateIcon} alt="" />
          </div>
          <div className="techstack-icon">
          <span className="text">Spring</span>

            <img src={springIcon} alt="" />
          </div>

          <div className="techstack-icon">
          <span className="text">Vite</span>

            <img src={viteIcon} alt="" />
          </div>
          <div className="techstack-icon github">
          <span className="text">GutHub</span>

            <img src={githubIcon} alt="" />
          </div>
          <div className="techstack-icon git">
          <span className="text">Git</span>

            <img src={gitIcon} alt="" />
          </div>
          <div className="techstack-icon vs">
          <span className="text">VsCode</span>

            <img src={vscodeIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
