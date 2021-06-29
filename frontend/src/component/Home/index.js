import React from "react";
import "./styles.scss";
import { building, cleaning, broom, pin } from "../module/svg/index";
// import APEXTriangle from '../module/APEXTriangle/APEXTriangle'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  renderTopBanner() {
    return (
      <div className="home__topBanner__cont">
        <div className="topBanner__contt__cont">
          <div className="topBanner__subHeader__cont">
            <span>RENEW YOUR LOOK</span>
          </div>
          <div className="topBanner__title__cont">
            <span>A TRADITION OF QUALITY CLEANING</span>
          </div>
          <div className="topBanner__text__cont">
            <span>
              With a single phone call, virtually all your maintenance needs can
              be handled with a professional approach and personalize service.
            </span>
          </div>
          <button className="topBanner__btn__cont">Contact Us</button>
        </div>
      </div>
    );
  }
  renderTrustBanner() {
    return (
      <div className="home__trust__cont">
        <div className="trust__subHeader__cont">
          <span>WHY CHOOSE US</span>
        </div>
        <div className="trust__title__cont">
          <span>Tradition of Trust</span>
        </div>
        <div className="trust__text__cont">
          <span>
            APEX has been serving for over 30 years of experience and a staff
            committed to the best customer service. Our professional maintenance
            crews are licensed, insured, bonded and they have years of
            experience in the industry. We are not only dedicated to enhancing
            the visual appeal of your facility, but also providing a more
            sanitary environment and healthier place of business. Simply think
            of APEX as your business partner who works late every night.
          </span>
        </div>
        <div className="trust__svgBanner__cont">
          {this.mapTrustSvg(
            "cleaning",
            "Professional cleaning",
            "Our team uses a sanitizing solution to wipe down light switches doorknobs."
          )}
          {this.mapTrustSvg(
            "building",
            "Renew your look",
            "Both of us take a lot of time in getting cleaned and beautified clean space. Professional Service."
          )}
          {this.mapTrustSvg(
            "broom",
            "Fast and efficient",
            "Our aim is to keep your space clean - Your aim will help! The through digital innovation world summit."
          )}
        </div>
        <div className="trust__diagram__cont">
          <div className="diagram__img__cont" style={{
            backgroundImage:`url('https://pinergyimages.s3.us-west-1.amazonaws.com/apexTriangle.png')`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat'
          }}>
            
          </div>
          <div className="diagram__contt__cont">
            {this.mapTrustTextbox(
              "Communication - ",
              "Communication between you and your cleaning crew is very important for those special needs you may have. With APEX , you will be assigned an account executive who will inspect and see to your specialized needs on a regular schedule. In addition, a log sheet is maintained on each account where periodic phone calls or personal inspections are made by our representatives."
            )}
            {this.mapTrustTextbox(
              "Experience - ",
              "Experience - APEX takes pride in integrity and expertise. Throughly trained on all standardized cleaning procedures, each APEX personnel services your building as their own. You can be assured that your company will benefit from our experience and ability to perform consistently and effectively."
            )}
            {this.mapTrustTextbox(
              "Services - ",
              "APEX will provide you with a customized work schedule based on your site-specific requirements. We recognize, understand and acknowledge the importance of a clean working environment, That is why we are dedicated to improving the appearance of your facilities with our thorough, detailed, professional and personalized services."
            )}
          </div>
        </div>
      </div>
    );
  }
  renderOurGreatBanner() {
    return (
      <div className="home__ourGreat__cont">
        <div className="home__ourGreat__cont__background"
        style={{
          backgroundImage:`url('https://pinergyimages.s3.us-west-1.amazonaws.com/broom_background.jpg')`,
          backgroundPosition:'center',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat'
        }}>
        </div>

        <div className="ourGreat__contt__cont">
          <div className="ourGreat__subHeader__cont">
            <span>WHY CHOOSE US</span>
          </div>
          <div className="ourGreat__title__cont">
            <span>Our Great</span>
          </div>
          <div className="ourGreat__text__cont">
            <span>
              Restoring the beauty and freshness of all your upholstered fabrics
              and take the work out of cleaning for you.
            </span>
          </div>
          <div className="ourGreat__lists__cont">
            {this.mapOurGreatSvg("CARPET CLEANING")}
            {this.mapOurGreatSvg("JANITORIAL SERVICES")}
            {this.mapOurGreatSvg("CEILING")}
            {this.mapOurGreatSvg("FLOOR STRIPING, SEALING AND WAXING")}
            {this.mapOurGreatSvg("WINDOW CLEANING")}
            {this.mapOurGreatSvg("SUPLLIES DELIVERY")}
          </div>
        </div>

      </div>
    );
  }
  renderAreasBanner() {
    return (
      <div className="home__areas__cont">
        <div className="areas__contt__cont">
          <div className="areas__subHeader__cont">
            <span>AREA</span>
          </div>
          <div className="areas__title__cont">WE SERVE</div>
          <div className="areas__locations__cont">
            {this.mapLocations("Los Angeles")}
            {this.mapLocations("Orange")}
            {this.mapLocations("Riverside")}
            {this.mapLocations("San Bernardino")}
          </div>
        </div>
      </div>
    );
  }
  renderContactBanner() {
    return (
      <div className="home__contact__cont">
        <div className="home__contact__cont__background"
        style={{
          backgroundImage:`URL("https://pinergyimages.s3.us-west-1.amazonaws.com/WaveBackground.png")`,
          backgroundSize:'cover',
          backgroundPosition:'right',
          backgroundRepeat:'no-repeat'
        }}>

        </div>
        <div className="contact__contt__cont">
          <div className="contact__subHeader__cont">
            <span>GET IN</span>
          </div>
          <div className="contact__title__cont">
            <span>ESTIMATE FOR YOUR NEED</span>
          </div>
          <input
            type="text"
            placeholder="Your name"
            className="contact__form__cont --sm"
          ></input>
          <input
            type="text"
            placeholder="Phone number"
            className="contact__form__cont --sm"
          ></input>
          <input
            type="text"
            placeholder="Email"
            className="contact__form__cont --sm"
          ></input>
          <textarea
            type="text"
            placeholder="Message here..."
            className="contact__form__cont --lg"
          ></textarea>
          <button type="submit" className="contact__form__btn">
            Submit
          </button>
        </div>
      </div>
    );
  }
  mapTrustSvg(type, title, text) {
    let svg;
    switch (type) {
      case "cleaning":
        svg = cleaning("", "", "svgBanner__svg__outerLayer");
        break;
      case "building":
        svg = building("", "", "svgBanner__svg__outerLayer");
        break;
      case "broom":
        svg = broom("", "", "svgBanner__svg__outerLayer");
        break;
      default:
        return;
    }
    return (
      <div className="svgBanner__contt__cont">
        <div className="svgBanner__svg__cont">{svg}</div>
        <div className="svgBanner__title__cont">{title}</div>
        <div className="svgBanner__text__cont">{text}</div>
      </div>
    );
  }
  mapTrustTextbox(title, text) {
    return (
      <div className="diagram__text__cont">
        <span className="diagram__text__title">{title}</span>
        <span className="diagram__text">{text}</span>
      </div>
    );
  }
  mapOurGreatSvg(text) {
    return (
      <div className="ourGreat__list__cont">
        <div className="ourGreat__svg__cont">
          {pin("", "", "ourGreat__svg__outerLayer")}
        </div>
        <div className="ourGreat__svg__text">{text}</div>
      </div>
    );
  }
  mapLocations(text) {
    return (
      <div className="areas__location__cont">
        <span>{text}</span>
      </div>
    );
  }
  render() {
    return (
      <div className="home__wrapper">
        {this.renderTopBanner()}
        {this.renderTrustBanner()}
        {this.renderOurGreatBanner()}
        {this.renderAreasBanner()}
        {this.renderContactBanner()}
      </div>
    );
  }
}
