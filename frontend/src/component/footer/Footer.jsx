import React from "react";
import "./footer.scss";

export default class Footer extends React.Component {
  mapFooter(title, text1, text2, text3, text4, text5) {
    console.log(title[0]);
    return (
      <div className="footer__contt__cont">
        <div className="footer__title__cont">
          {title[0] === "/" ? <img src={title} /> : <span>{title}</span>}
        </div>
        <div
          className={`footer__text__cont ${
            title === "Quick Links" && "--links"
          }`}
        >
          <span>{text1}</span>
          {text2 === "button" ? (
            <div className="footer__form__cont">
              <input
                type="text"
                className="footer__input__cont"
                placeholder="Enter your email"
              ></input>
              <button type="submit" className="footer__btn__cont">
                Sign Up
              </button>
            </div>
          ) : (
            <span>{text2}</span>
          )}
          <span>{text3}</span>
          <span>{text4}</span>
          <span>{text5}</span>
        </div>
      </div>
    );
  }
  render() {
    return (
      // <div>
      //   {" "}
      //   <footer className="Rectangle-33">
      //     <div className='footer-contents'>
      //       <div className='left-footer'>
      //         <div className='footer-logo'>
      //         {/* pic  */}
      //         <img src="/logo/apexOld.png" width='100%'/>
      //         </div>
      //       </div>
      //       <div className='right-footer'>
      //         <div className="email">
      //         {" "}
      //         <p>Email: info@apexmaint.com</p>
      //       </div>
      //       <div className="phone">
      //         {" "}
      //         <p>
      //           Phone: 714-956-5032
      //           <br />
      //           {/* <br /> */}
      //           Fax: 714-956-8196{" "}
      //           <br/>
      //           <div className='mobile-email'>Email: info@apexmaint.com</div>
      //         </p>
      //       </div>
      //       </div>

      //     </div>
      //   </footer>
      // </div>
      <div className="footer__wrapper">
        <div className="footer__contt__wrapper">
          {this.mapFooter(
            "/logo/apexOld.png",
            "APEX Building Maintenance, Inc promise the best service for all our customers."
          )}
          {this.mapFooter(
            "Get In Touch",
            "2660 W Woodland Dr #180 Anaheim, CA 92801",
            "email: info@apexmaint.com"
          )}
          {this.mapFooter(
            "Quick Links",
            "Home",
            "Disinfection",
            "Services Commercial",
            "Cleaning Supplies",
            "Contact Us"
          )}
          {this.mapFooter(
            "Our Newsletter",
            "Subscribe to our newsletter to receive the latest news",
            "button"
          )}
        </div>
      </div>
    );
  }
}
