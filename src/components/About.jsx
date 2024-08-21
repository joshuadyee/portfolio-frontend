import { FaBootstrap, FaCss3Alt, FaGit, FaGithub, FaHtml5, FaNpm, FaPython, FaReact } from "react-icons/fa"
import { IoIosDocument } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5"
import { DiRuby } from "react-icons/di"
import { SiPostgresql, SiRubyonrails, SiTailwindcss } from "react-icons/si";
import { ProfilePic } from "./ProfilePic";


export const About = () => {
  
  return (
  <section className="about" id="about">
      <div className="about-container">
        <div className="bio">
          <h1>About Me</h1>
          <p className="about-text">Hey! I'm Josh, a
            <span className="important_text">Full-Stack Web Developer 
            </span>
          with a passion for transforming client concepts into intuitive and precisely crafted web applications. My journey in tech has been fueled by a deep drive for 
          <span className="important_text no-space">
          learning and adapting
          </span>, allowing me to continually refine my approach to problem-solving. This drive enables me to create
          <span className="important_text no-space">
            dynamic and responsive web applications 
          </span> that are both visually appealing and user-friendly. I'm excited to continue growing as a developer and to collaborate with others to create
          <span className="important_text no-space">innovative solutions</span>. Let's build something amazing together!</p>
          <h1>My Skills</h1>
          <p>
            I specialize in developing dynamic web applications with a solid tech stack that includes:
          </p>
          <ul className="skills">
            <li><FaReact /></li>
            <li><IoLogoJavascript /></li>
            <li><DiRuby /></li>
            <li><SiRubyonrails /></li>
            <li><FaPython /></li>
            <li><FaHtml5 /></li>
            <li><FaCss3Alt /></li>
            <li><SiTailwindcss /></li>
            <li><FaBootstrap /></li>
            <li><FaGit /></li>
            <li><FaGithub /></li>
            <li><FaNpm /></li>
            <li><SiPostgresql /></li>
          </ul>
          <h1>My Experience 
            <span className="resume-link">
              <a href="resume" >
                <IoIosDocument />
              </a>
            </span>
          </h1>
          <p className="experience">In addition to building robust web app projects that you can find 
            <a href="#projects" className="projects-link"> here
            </a>
            , I have:
            <ul className="experiences" >
              <li>
                provided comprehensive support to students in mastering full-stack web development skills including Ruby on Rails and React.js
              </li>
              <li>
                crafted tailored websites for clients as a freelance web developer, delivering innovative, user-centric solutions that drove engagement and boosted client satisfaction 
              </li>
            </ul>
          </p>
          <h1>Beyond the Code</h1>
          <p>
            Outside of working on coding projects, you can find me cooking up some delicious meals for friends and family, cheering on the 49ers to their 6th Super Bowl, checking out a new movie, or brushing up on my billiards skills. 
          </p>
          
        </div>
       <ProfilePic />
      </div>
    </section>
  )
}