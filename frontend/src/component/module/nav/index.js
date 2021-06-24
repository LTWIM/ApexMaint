import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import { phone, mail } from "../svg/index";
export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  mapNavLinks(type) {
    let link;
    switch (type) {
      case "HOME":
        link = "/";
        break;
      case "DISINFECTION SERVICES":
        link = "/service";
        break;
      case "COMMERCIAL CLEANING":
        link = "/cleaning";
        break;
      case "SUPPLIES":
        link = "/supplies";
        break;
      case "CONTACT US":
        link = "/contact";
        break;
      default:
        return;
    }
    return (
      <NavLink className="nav__link__cont" to={link}>
        <span>{type}</span>
      </NavLink>
    );
  }
  render() {
    return (
      <div className="nav__wrapper">
        <div className="nav__contacts__wrapper">
          <div className="nav__contacts__cont">
            <div className="nav__contact__cont">
              <div className="contact__svg__cont">
                {phone("#fbfbfb", "", "contact__svg__outerLayer")}
              </div>
              <div className="contact__text__cont">
                <span>714.956.5032</span>
              </div>
            </div>
            <div className="nav__contact__cont">
              <div className="contact__svg__cont">
                {mail("transparent", "", "contact__svg__outerLayer")}
              </div>
              <div className="contact__text__cont">
                <span>info@apexmaint.com</span>
              </div>
            </div>
          </div>
          <button className="nav__contact__btn">GET A QUOTE</button>
        </div>
        <div className="nav__contt__cont">
          <div className="nav__logo__cont">
            <img src="/logo/apexOld.png" />
          </div>
          <div className="nav__links__cont">
            {this.mapNavLinks("HOME")}
            {this.mapNavLinks("DISINFECTION SERVICES")}
            {this.mapNavLinks("COMMERCIAL CLEANING")}
            {this.mapNavLinks("SUPPLIES")}
            {this.mapNavLinks("CONTACT US")}
          </div>
        </div>
      </div>
    );
  }
}
