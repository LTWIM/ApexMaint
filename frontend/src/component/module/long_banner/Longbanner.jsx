import "./module.scss";
import {Link} from "react-router-dom";
import React from 'react';
const LongBanner = (props) => {
  const {type, backgroundImageUrl, content, bigContent, smallContent, displayButton } =props
  /* This banner will be used in 3 instances where
  type1 would indidcate a hero with stacked text
  type2 would indicated left justified banner
  type3 would indicate call to action hero at the bottom of the page 
  **func returnClassName will be used to deliver class names based on 3 different types
  */

  const returnClassName = (type) => {
    switch (type){
      case "type1":
        return 'type-1-cont'
      case "type2":
        return 'type-2-cont'
      case "type3":
        return 'type-3-cont'
      case "type4":
        return 'type-3-cont'
      case "type5":
        return 'type-5-cont'
      case "type6":
        return 'type-6-cont' 
      case "type7":
        return 'type-7-cont'
      default:
        return 'simple'
    }
  }

  const renderContent = (type) => {
    switch (type){
      case "type1":
        return ( 
        <div className="typ1-cont-cntt">
        {content}
        </div>
        )
      case "type2":
        return(
        <div className="typ2-cont-cont">
        {content}
        </div>
        )
        case "type3":
        return( 
        <div className="typ3-cont-cont">
          <span className="big-sp">Request a Quote</span>
          <br/>
          <span className="small-sp">Contact us now if you would like to receive a personalized service</span>
          <br/>
          <Link to ={{pathname: "/contact"}}>ASK NOW</Link>
         </div>
         )
          case "type4":
            return(
            <div className="typ3-cont-cont">
            <span className="big-sp">Let's Talk</span>
            <br/>
            <span className="small-sp">We would love to hear from you!</span>
            <br/>
                {displayButton && <Link className="long-ban-link">Get In Touch With Us</Link>}
            </div>
            )
          case "type5":
            return(
            <div className="typ5-cont-cont">
            <span className="big-sp">APEX Building Maintenance, Inc</span>
            <br/>
            <span className="small-sp">With a single phone call,</span>
            <br/>
            <span className="small-sp">virtually all your maintenance needs can be handled</span>
            <br/>
            <span className="small-sp">with a professional approach and personalized service.</span>
            <br/>
            <span className="medium-sp">CALL US TODAY | 714.956.5032</span>
            <br/>
            <Link className="contact-us-link">Request A Free Quote Now</Link>
            </div>
            )
          case "type6":
            return(
            <div className="typ6-cont-cont">
            {content}
            <br/>
            <Link className="contact-us-link">Get In Touch With Us</Link>
            </div>
            )
          case "type7":
            return(
              <div className="typ7-cont-cont">
                {bigContent}
                <br/>
                {smallContent}
              </div>
            )
      default:
        return <div/>
    }
  }
  return (
    <div className={`${returnClassName(type)} long-ban-mod-cont`}>
      {renderContent(type)}
    </div>
  )
}
export default LongBanner;