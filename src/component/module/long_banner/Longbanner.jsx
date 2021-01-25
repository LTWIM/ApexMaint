import { render } from "@testing-library/react";
import "./module.scss";
import "./styles.css";
import {Link} from "react-router-dom"
const LongBanner = (props) => {
  const {type, backgroundImageUrl, content } =props
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
        return 'type-4-cont'
      case "type5":
        return 'type-5-cont'
      case "type6":
        return 'type-6-cont' 
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
          <Link>ASK NOW</Link>
         </div>
         )
          case "type4":
            return(
            <div className="typ4-cont-cont">
            <span className="big-sp">Let's Talk</span>
            <br/>
            <span className="small-sp">We would love to hear from you!</span>
            <br/>
            <Link className="long-ban-link">Get In Touch With Us</Link>
            </div>
            )
          case "type5":
            return(
            <div className="typ5-cont-cont">
            <span>APEX Building Maintenance, Inc</span>
            <br/>
            <span>With a single phone call,</span>
            <br/>
            <span>virtually all your maintenance needs can be handled</span>
            {content}
            </div>
            )
          case "type6":
            return(
            <div className="typ6-cont-cont">
            {content}
            </div>
            )
    
      default:
        return <div/>
    }
  }
  return (
    <div className={`${returnClassName(type)} long-ban-mod-cont`} style={{backgroundImage: `url(${backgroundImageUrl})`}} >
      {renderContent(type)}
    </div>
  )
    }
  export default LongBanner;