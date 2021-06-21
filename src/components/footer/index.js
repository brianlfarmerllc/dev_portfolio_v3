import gitHub from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footerNav">
        <a href="mailto:brianlfarmerllc@gmail.com" className="email">
          <p>Designed and built by Brian Farmer</p>
        </a>
        <ul>
          <li>
            <a href="https://github.com/brianlfarmerllc">
              <img src={gitHub} alt="github-social-link" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/BrianLFarmerLLC">
              <img src={linkedin} alt="linkedin-social-link" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
