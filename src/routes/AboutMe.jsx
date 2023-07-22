import React, { useEffect, useState } from "react";
import "../styles/aboutme.css";
import Navbar from "../components/Navbar";
import Avatar from "react-avatar";
import avatarImage from "../images/avatar_img.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faTwitter,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import { faCode } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="AboutMe">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Navbar active={"aboutme"} />
          <div className="aboutMeContainer">
            <div className="avatarContainer">
              <Avatar src={avatarImage} size="200" round={true} />
            </div>
            <div className="aboutMeText">
              <p>
                I'm Subrat Yeeshu, a final year student at IIIT Lucknow, specializing in web development with a focus on the MERN stack. My passion for technology drives me to stay updated with the latest advancements, and I'm always open to exploring new technologies.
              </p>
              <p>
                I'm always looking for new challenges and
                opportunities to apply my skills and knowledge. I'm open to
                collaborating with other developers and designers, and I'm
                excited to work on projects that have a positive impact on
                society.
              </p>
              <p>
                Please feel free to reach out to me if you have any questions.
              </p>
            </div>
            <div className="socialMediaLinkContainer">
              <a
                href={"https://www.linkedin.com/in/subrat-yeeshu"}
                target="_black"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="fa-2x icon-hover"
                />
              </a>
              <a
                href={"https://www.instagram.com/subratyeeshu/"}
                target="_black"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="fa-2x icon-hover"
                />
              </a>
              <a
                href={"https://twitter.com/subratyeeshu"}
                target="_black"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="fa-2x icon-hover"
                />
              </a>
              <a
                href={"https://github.com/SubratYeeshu"}
                target="_black"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="fa-2x icon-hover" />
              </a>

              <a
                href={"https://leetcode.com/Subrat_Yeeshu/"}
                target="_black"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faCode} className="fa-2x icon-hover" />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AboutMe;