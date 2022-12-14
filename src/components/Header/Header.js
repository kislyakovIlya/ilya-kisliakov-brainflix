import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import upload from "../../assets/Icons/upload.svg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <header className="header">
        <Link className="header__logo" to="/">
          <img className="header__logo-pic" alt="logo" src={logo} />
        </Link>

        <div className="header__search">
          <input className="header__search__bar" placeholder="Search" />
          <div className="header__search__avatar">
            <div className="header__search__avatar__pic"></div>
          </div>
        </div>
        <div className="header__upload">
          <Link className="header__upload__button" to="/upload">
              <img
                className="header__upload__button-img"
                alt="upload"
                src={upload}
              />
              UPLOAD
          </Link>
          <div className="header__upload__avatar">
            <div className="header__upload__avatar__pic"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
