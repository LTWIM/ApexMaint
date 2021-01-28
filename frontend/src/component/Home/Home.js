import React,{ Component } from'react'
import './home.scss'
import LongBanner from "../module/long_banner/Longbanner"
import {Link} from "react-router-dom"
export class Home extends React.Component{
  Triangle = () => {
    return(
      <div className='introduce-pic-logo'>
        <div className='a'> <div className='red'>A</div>ffordable </div>
        <div className='p'> <div className='blue'>P</div>rofessional </div>
        <div className='e'> <div className='red'>E</div>xprienced </div>
        <div className='redX'>X</div><div className='x'>cellently Referred </div>
        <img className='triup' src={'/img/tri-up.png'}></img>
        <img className='tridown' src={'/img/tri-down.png'}></img>
        <img className='trileft' src={'/img/tri-up.png'}></img>
        <img className='triright' src={'/img/tri-up.png'}></img>
    </div>
    )
  }

  Ourservice = () =>{
    return(
      <div>
        <div className='our-services-pic-cont'>
          <div className='inner'>
            <div className='our-services-pic' object-fit="cover">
              <img className="image" src={"/img/ourservices1.png"}/>
              <div className='darker'/>
              <div className='title'>JANITORIAL SERVICES</div>
            </div>
            <div className='our-services-pic'>
              <img className="image" src={"/img/ourservices2.png"}/>
              <div className='darker'/>
              <div className='title'>CARPET CLEANING</div>
            </div>
            <div className='our-services-pic'>
              <img className="image" src={"/img/ourservices3.png"}/>
              <div className='darker'/>
              <div className='title'>CEILING </div>
            </div>
          </div>
        </div>

        <div className='our-services-pic-cont' object-fit="cover">
          <div className='inner'>
            <div className='our-services-pic'>
              <img className="image" src={"/img/ourservices4.png"}/>
              <div className='darker'/>
              <div className='title' left='40px'>FLOOR STRIPING SEALING AND WAXING</div>
            </div>
            <div className='our-services-pic'>
              <img className="image" src={"/img/ourservices5.png"}/>
              <div className='darker'/>
              <div className='title'>WINDOW CLEANING</div>
            </div>
            <div className='our-services-pic'>
              <img className="image" src={"/img/ourservices6.png"}/>
              <div className='darker'/>
              <div className='title'>SUPPLIES DELIVERY</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  Circle = () => {
    return(
      <div className='Areas-we-services-pic-cont'>
        <div className='Areas-we-services-pic1'>pic
          <div className='logo-title'>
            <div>Los Angeles</div>
            <div>Country</div>
          </div>
        </div>
        <div className='Areas-we-services-pic2'>pic
          <div className='logo-title'>
            <div>Orange </div>
            <div>Country</div>
          </div>
        </div>
        <div className='Areas-we-services-pic3'>pic
          <div className='logo-title'>
            <div>Riverside</div>
            <div>Country</div>
          </div>
        </div>
        <div className='Areas-we-services-pic4'>
          pic
          <div className='logo-title'>
            <div>San Bernardino</div>
            <div>Country</div>
          </div> 
        </div>
      </div>  
    )
  }


  render(){
    return(
      <div>
        <div className='wall-paper-top-cont'>
          <div className='wall-paper-top'>
            <div className='wall-paper-dark'/>
          </div>
          <LongBanner type="type5"/>
        </div>

        <div className='wall-paper-bottom'>
          <div className='darker'></div>
          <div className='wall-paper-bottom-title'>DISINFECTIING/SANITIZING SERVICIES</div>
          <Link to='/contact'><div className='wall-paper-bottom-click'>GET IN TOUCH WITH US</div></Link>     
        </div>

        <div className='introduce-cont'>
          <div className='introduce-pic-cont'>
            {this.Triangle()}
          </div>
          <div className='introduce-stringbox'>
            <div className='innerbox'>
              <div className='introduce-string-title'>About APEX Business Maintenance, Inc</div>
              <div className='introduce-string-textbox1'>
                APEX has been serving for over 30 years of experience and a staff committed to the best customer service. Our professional maintenance crews are licensed, insured, bonded and they have years of experience in the industry. We are not only dedicated to enhancing the visual appeal of your facility, but also providing a more sanitary environment  and healthier place of business. 
              <div>
                Simply think of APEX as your business partner who works late every night.
              </div>
            </div>
            <div className='section-cont'>
              <div className='section-title'>Communication</div>
              <div className='section-title'>Experience</div>
              <div className='section-title'>Services</div>
            </div>
            <div className='section-textbox-cont'>
              <div className='section-textbox'>
                Communication between you and your cleaning crew is very important for those special needs you may have. With APEX , you will be assigned an account executive who will inspect and see to your specialized needs on a regular schedule. In addition, a log sheet is maintained on each account where periodic phone calls or personal inspections are made by our representatives.
              </div>
              <div className='section-textbox'>
                APEX takes pride in integrity and expertise. Throughly trained on all standardized cleaning procedures, each APEX personnel services your building as their own. You can be assured that your company will benefit from our experience and ability to perform consistently and effectively.
              </div>
              <div className='section-textbox'>
                APEX takes pride in integrity and expertise. Throughly trained on all standardized cleaning procedures, each APEX personnel services your building as their own. You can be assured that your company will benefit from our experience and ability to perform consistently and effectively.
              </div>
            </div>  
          </div>
        </div>      
        </div>
        <div className='our-services-title'>Our Service</div>
         { this.Ourservice()}
        <div className='Areas-we-service-title'>Areas We Service</div>
          {this.Circle()}
      </div>
    )
  }
}

export default Home