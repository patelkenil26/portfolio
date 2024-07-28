import React from "react";
import "./Education2.css";
import theme_pettern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile-pic.png";
import building from "../../assets/icon-building.svg";
import calender from "../../assets/icon-calender.svg";

const Eduction = () => {
  return (
    <div id="education" className="education">
      <div className="education-title">
        <h1>Education</h1>
        <img src={theme_pettern} alt="" />
      </div>

      {/* <div className="education-section">
        <div className="education-right">
          <div className="education-main">
            <div className="edu-one">
              <h3>B.Tech (Computer Science and Engineering)</h3>
              <p>CGPA: 8.0</p>
            </div>
            <div className="edu-two">
              <h6>PARUL UNIVERSITY</h6>
              <h6>2025</h6>
            </div>
            <hr />
            <div className="edu-three">
              <h3>SENIOR SCHOOL(12th)</h3>
              <p>Percentage: 86.45% (GSEB)</p>
            </div>
            <div className="edu-four">
              <h6>Ilwadurga VidhyaSankul Idar</h6>
              <h6>2021</h6>
            </div>
            <hr />
            <div className="edu-five">
              <h3>High School(10th)</h3>
              <p>Percentage: 76.00% (GSEB)</p>
            </div>
            <div className="edu-six">
              <h6>Shree Mati S.B. Shah HighSchool Eklara</h6>
              <h6>2019</h6>
            </div>
            <hr />
          </div>
          {/* </div> */}
      
        <div className="edu-info">
          <div className="edu-one">
          <h3>B.Tech (Computer Science and Engineering)</h3>
          <p>CGPA: 8.0</p>
          </div>
          <div className="edu-two">
            <h6>
              <img src={building} alt="building" />
            PARUL UNIVERSITY
            </h6>

            <h6 className="edu-year">
              <img src={calender} alt="calender" />
              2025
            </h6>
          </div>
        </div>

        <div className="edu-info">
          <div className="edu-one">
          <h3>SENIOR SCHOOL(12th)</h3>
          <p>Percentage: 86.45% (GSEB)</p>
          </div>
          <div className="edu-two">
            <h6>
              <img src={building} alt="building" />
              Ilwadurga VidhyaSankul Idar
            </h6>

            <h6 className="edu-year">
              <img src={calender} alt="calender" />
              2021
            </h6>
          </div>
        </div>

        <div className="edu-info">
          <div className="edu-one">
          <h3>High School(10th)</h3>
          <p>Percentage: 76.00% (GSEB)</p>
          </div>
          <div className="edu-two">
            <h6>
              <img src={building} alt="building" />
              Shree Mati S.B. Shah HighSchool Eklara
            </h6>

            <h6 className="edu-year">
              <img src={calender} alt="calender" />
              2019
            </h6>
          </div>
        </div>
    
    </div>
  );
};

export default Eduction;
