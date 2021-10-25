import pessoa from "../../assets/img/pessoa.jpg";
import gustavo from "../../assets/img/team/gustavo.png";
import joel from "../../assets/img/team/joel.png";
import one from "../../assets/img/team/1.png";
import two from "../../assets/img/team/2.png";
import three from "../../assets/img/team/3.png";
import four from "../../assets/img/team/4.png";
import five from "../../assets/img/team/5.png";
import six from "../../assets/img/team/6.png";
import { FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";
import "./style.css";
function Group() {
  return (
    <>
      <div className="box-group">
        <ul className="team">
          <li>
            <img src={`${joel}`} />
            <h3>Joel</h3>
            <div>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaLinkedinIn />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaInstagram />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaFacebook />
              </a>
            </div>
          </li>
          <li>
            <img src={`${gustavo}`} />
            <h3>Gustavo</h3>
            <div>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaLinkedinIn />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaInstagram />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaFacebook />
              </a>
            </div>
          </li>
          <li>
            <img src={`${one}`} />
            <h3>Kleicianny</h3>
            <div>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaLinkedinIn />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaInstagram />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaFacebook />
              </a>
            </div>
          </li>
          <li>
            <img src={`${three}`} />
            <h3>Camila</h3>
            <div>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaLinkedinIn />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaInstagram />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaFacebook />
              </a>
            </div>
          </li>
          <li>
            <img src={`${five}`} />
            <h3>Thuane</h3>
            <div>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaLinkedinIn />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaInstagram />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaFacebook />
              </a>
            </div>
          </li>

          <li>
            <img src={`${four}`} />
            <h3>Vanessa</h3>
            <div>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaLinkedinIn />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaInstagram />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaFacebook />
              </a>
            </div>
          </li>
          <li>
            <img src={`${two}`} />
            <h3>Luiz Eduardo</h3>
            <div>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaLinkedinIn />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaInstagram />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaFacebook />
              </a>
            </div>
          </li>
          <li>
            <img src={`${six}`} />
            <h3>Grasiele</h3>
            <div>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaLinkedinIn />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaInstagram />
              </a>
              <a href="" target="_blank" rel="noreferrer noopener">
                <FaFacebook />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Group;
