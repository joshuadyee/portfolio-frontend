import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoIosDocument } from 'react-icons/io';
 
export const Links = () => {
  return (
    <div className='links_container'>
      <ul className="links">
        <li>
          <a href="https://linkedin.com/in/joshuadyee" target="_blank"><FaLinkedin /></a>
        </li>
        <li>
          <a href="https://github.com/joshuadyee" target="_blank"><FaGithub /></a>
        </li>
        <li>
          <a href="mailto: joshyee16@gmail.com" target="_blank"><MdOutlineMailOutline /></a>
        </li>
        <li>
          <a href="">
            <IoIosDocument />
          </a>
        </li>
    </ul>
    </div>
  );
}