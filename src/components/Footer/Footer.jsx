import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          &copy; {new Date().getFullYear()} Just Do It. All rights reserved.
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/maicol240"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/maicol-baez-04b1a9129/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
