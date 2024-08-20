import { FaBootstrap, FaCss3Alt, FaGit, FaGithub, FaHtml5, FaNpm, FaPython, FaReact } from "react-icons/fa"
import { FaAnglesDown } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5"
import { DiRuby } from "react-icons/di"
import { SiPostgresql, SiRubyonrails, SiTailwindcss } from "react-icons/si";


export const About = () => {
  
  return (
  <section className="about" id="about">
      <div className="about_container">
        <div className="bio">
          <h1>About Me</h1>
          <p className="about_text">Hey! I'm Josh, a
            <span className="important_text">Full-Stack Web Developer 
            </span>
          with a passion for transforming concepts into intuitive and precisely crafted web applications. My journey in tech has been fueled by a deep drive for 
          <span className="important_text no-space">
          learning and adapting
          </span>, allowing me to continually refine my approach to problem-solving. This drive enables me to create 
          <span className="important_text no-space">
            dynamic and responsive web applications
          </span>, that are both visually appealing and user-friendly. I'm excited to continue growing as a developer and to collaborate with others to create
          <span className="important_text no-space">innovative solutions</span>. Let's build something amazing together!</p>
          <h1>My Skills</h1>
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
          <h1>My Background</h1>
          <p className="background_text">My path to becoming a software developer has been anything but traditional</p>
          <h1>My <a href="#projects" className="projects_title">Projects</a><FaAnglesDown className="angle_down"/></h1>
        </div>
        <div className="picture_container">
          <img className="profile_picture" src="src/assets/profpic.jpg" alt="Joshua Yee profile picture" />
        </div>
      </div>
    </section>
  )
}