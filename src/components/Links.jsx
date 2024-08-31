import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoIosDocument } from 'react-icons/io';
 
export const Links = () => {
  return (
    <div className='links_container'>
      <ul className="links">
        <li>
          <a href="https://linkedin.com/in/joshuadyee" target="_blank">
            <FaLinkedin />
            <span className='hover-text'>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/joshuadyee" target="_blank">
            <FaGithub />
            <span className='hover-text'>GitHub</span>
          </a>
        </li>
        <li>
          <a href="mailto: joshyee16@gmail.com" target="_blank">
            <MdOutlineMailOutline />
            <span className='hover-text'>Email Me</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/joshuadyee/Resume/blob/f7cca193cb673b9de5827d20f3865a0c14f13c44/Joshua-Yee-SWD-Resume.pdf" target="_blank">
            <IoIosDocument />
            <span className='hover-text'>Resume</span>
          </a>
        </li>
      </ul>
    </div>
  );
}