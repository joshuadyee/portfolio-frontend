import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const Header = () => {
  return (
    <header>
      <nav >
        <div className="pages">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        
        <ul className="links">
          <li>
            <a href="https://linkedin.com/in/joshuadyee" target="_blank"><FaLinkedin /></a>
          </li>
          <li>
            <a href="https://github.com/joshuadyee" target="_blank"><FaGithub /></a>
          </li>
          <li>
            <a href="https://instagram.com/yung_yee31" target="_blank"><FaInstagram /></a>
          </li>
        </ul>
      </nav>
    </header>
  )
}