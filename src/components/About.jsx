import { FaBootstrap, FaCss3Alt, FaGit, FaGithub, FaHtml5, FaPython, FaReact } from "react-icons/fa"
import { IoIosDocument } from "react-icons/io";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5"
import { DiRuby } from "react-icons/di"
import { SiPostgresql, SiRubyonrails, SiTailwindcss } from "react-icons/si";
import { ProfilePic } from "./ProfilePic";


export const About = () => {
  
  return (
  <section className="about" id="about">
    <div className="about-container">
      <div className="bio">
        <h1>About Me</h1>
        <p className="about-text">
          I'm Josh, a
          <span className="important_text">
            Full-Stack Web Developer 
          </span>
          passionate about transforming client concepts into intuitive and precisely crafted web applications. My experiences drive me to continually learn and adapt, enabling me to build
          <span className="important_text">
            dynamic, responsive applications
          </span> 
          that are both visually appealing and user-friendly. I'm excited to grow as a developer and collaborate with others to create
          <span className="important_text no-space">
            innovative solutions
          </span>
          . Let's create something amazing!
        </p>
        <h1>My Tech Stack</h1>
        <ul >
          <li className="skill-category">Frontend</li>
          <ul className="skills">
            <li>
              <FaReact />
            </li>
            <li>
              <IoLogoJavascript />
            </li>
            <li>
              <FaHtml5 />
            </li>
            <li>
              <FaCss3Alt />
            </li>
            <li>
              <SiTailwindcss />
            </li>
            <li>
              <FaBootstrap />
            </li>
          </ul>
          <li className="skill-category">Backend</li>
          <ul className="skills">
            <li>
              <DiRuby />
            </li>
            <li>
              <SiRubyonrails />
            </li>
            <li>
              <FaPython />
            </li>
          </ul>
          <li className="skill-category">Database</li>
          <ul className="skills">
            <li>
              <SiPostgresql />
            </li>
            <li>
              <IoLogoFirebase />
            </li>
          </ul>
          <li className="skill-category">Version Control</li>
          <ul className="skills">
            <li>
              <FaGit />
            </li>
            <li>
              <FaGithub />
            </li>
          </ul>
        </ul>
        <h1>My Experience 
          <span className="resume-link" title="resume">
            <a href="https://github.com/joshuadyee/Resume/blob/f7cca193cb673b9de5827d20f3865a0c14f13c44/Joshua-Yee-SWD-Resume.pdf" target="_blank" >
              <IoIosDocument />
              <span className="hover-text">Resume</span>
            </a>
          </span>
        </h1>
        <p className="experience">In addition to building robust web app projects that you can find 
          <a href="#portfolio" className="projects-link">here
          </a>
          , I have:
          <ul className="experiences" >
            <li>
              Provided comprehensive support to students in mastering full-stack web development skills including Ruby on Rails and React.js.
            </li>
            <li>
              Crafted tailored websites for clients as a freelance web developer, delivering innovative, user-centric solutions that drove engagement and boosted client satisfaction.
            </li>
          </ul>
        </p>
        {/* <h1>Beyond the Code</h1>
        <p>
          Outside of working on coding projects, you can find me cooking up delicious meals for friends and family, cheering on the 49ers to their sixth Super Bowl victory, checking out a new movie, or brushing up on my billiards skills. 
        </p> */}
      </div>
      <ProfilePic />
    </div>
  </section>
  )
}