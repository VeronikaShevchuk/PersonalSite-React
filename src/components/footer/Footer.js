import "./style.css";
import vk from "./../../img/icons/vk.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import instagram from "./../../img/icons/instagram.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import twitter from "./../../img/icons/twitter.svg";

function Footer () {

    return (
        <footer className="footer">
        <div className="container">
          <div className="footer__wraper">
            <ul className="social">
              <li className="social__item">
                <a href="#!"><img src={vk} alt="vk link" /></a>
              </li>
              <li className="social__item">
                <a href="#!"><img src={instagram} alt="instagram link" /></a>
              </li>
              <li className="social__item">
                <a href="#!"><img src={twitter} alt="twitter link" /></a>
              </li>
              <li className="social__item">
                <a href="#!"><img src={gitHub} alt="gitHub link" /></a>
              </li>
              <li className="social__item">
                <a href="#!"><img src={linkedIn} alt="linkedIn link" /></a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023</p>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;