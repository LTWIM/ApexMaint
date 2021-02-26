import React,{ Component } from'react';
import './home.scss';
import LongBanner from "../module/long_banner/Longbanner";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
// import Video from "./Video/APEX.mp4";
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
            <div className='our-services-pic' style={{ 
                    backgroundImage: `url(/img/ourservices1.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'cover'
                  }}>
              <div className='darker'>
                <span className="animated fadeIn">JANITORIAL SERVICES</span>
              </div>
            </div>
            <div className='our-services-pic' style={{ 
                    backgroundImage: `url(/img/ourservices2.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'cover'
                  }}>
              <div className='darker'><span>CARPET CLEANING</span></div>
            </div>
            <div className='our-services-pic' style={{ 
                    backgroundImage: `url(/img/ourservices3.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'cover'
                  }}>
              <div className='darker'><span>CEILING</span></div>
            </div>
          </div>
        </div>

        <div className='our-services-pic-cont' object-fit="cover">
          <div className='inner'>
            <div className='our-services-pic' style={{ 
                    backgroundImage: `url(/img/ourservices4.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'cover'
                  }}>
              <div className='darker'><span>FLOOR STRIPING SEALING AND WAXING</span></div>
            </div>
            <div className='our-services-pic' style={{ 
                    backgroundImage: `url(/img/ourservices5.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'cover'
                  }}>
              <div className='darker'><span>WINDOW CLEANING</span></div>
            </div>
            <div className='our-services-pic' style={{ 
                    backgroundImage: `url(/img/ourservices6.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'cover'
                  }}>
              <div className='darker'><span>SUPPLIES DELIVERY</span></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  Circle = () => {
    return(
      <div className='Areas-we-services-pic-cont'>
        
        <div className='Areas-we-services-pic1'>
          <div className='logo-title'>
            <div>Los Angeles</div>
            <div>County</div>
          </div>
        </div>
        <div className='Areas-we-services-pic2'>
          <div className='logo-title'>
            <div>Orange </div>
            <div>County</div>
          </div>
        </div>
        <div className='Areas-we-services-pic3'>
          <div className='logo-title'>
            <div>Riverside</div>
            <div>County</div>
          </div>
        </div>
        <div className='Areas-we-services-pic4'>
          <div className='logo-title'>
            <div>San Bernardino</div>
            <div>County</div>
          </div> 
        </div>
      </div>  
    )
  }


  render(){
    return(
      <div className='Home-cont'>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Commercial Cleaning for Any Industry Whether your company makes its home in an office building, clinic or school, we deliver professional commercial cleaning services that help promote healthy work environments and keep your buildings sparkling."/>
          <meta name="keywords"  content="
          cleaning services commercial,
          commercial cleaning service,
          commercial cleaning services,
          commercial cleaning,
          commercial pressure washing,
          commercial carpet cleaner,
          commercial carpet cleaning,
          office cleaning,
          office cleaning services,
          commercial cleaning supplies,
          commercial steam cleaner,
          business cleaning,
          commercial cleaning services near me,
          professional commercial cleaning services,
          commercial cleaning companies,
          commercial cleaning company,
          commercial carpet cleaning machines,
          office cleaning services near me,
          commercial window cleaning,
          commercial disinfecting,
          commercial floor cleaner,
          commercial sanitizing,
          commercial cleaning companies near me,
          office cleaning companies,
          carpet cleaner for business,
          commercial cleaners near me,
          restaurant cleaning,
          cleaning company services,
          building cleaning,
          commercial cleaning products,
          commercial cleaning contractors,
          commercial cleaning contracts,
          floor cleaning company,
          office cleaners near me,
          commercial carpet extractors,
          stanley steemer commercial,
          commercial kitchen cleaning,
          how to start a commercial cleaning business,
          commercial carpet shampooers,
          commercial window washing,
          commercial office cleaning services,
          medical office cleaning,
          commercial carpet steam cleaner,
          tot commercial cleaning,
          commercial office cleaning,
          commercial kitchen cleaning services,
          bissell biggreen bg10,
          office cleaning companies near me,
          commercial cleaning jobs,
          commercial cleaning supplies,
          commercial kitchen supplies,
          business cleaning supplies,
          office cleaning supply,
          commercial cleaning products,
          commercial janitorial supplies near me,
          commercial cleaning supplies near me,
          commercial janitorial supplies,
          commercial steam mops,
          commercial greenhouse supplies,
          commercial cleaning equipment,
          commercial cleaning products wholesale,
          commercial pest control supplies near me,
          commercial bathroom supplies,
          hand soap dispenser commercial,
          eco friendly commercial cleaning products,
          commercial bakery supplies wholesale,
          commercial restroom supplies,
          commercial bathroom cleaners,
          commercial window cleaning supplies,
          commercial supplies near me,
          disinfectant wipes commercial,
          commercial supplies distributors,
          office cleaning products,
          commercial green cleaning products,
          commercial cleaning supply company,
          business cleaning products,
          commercial business supply,
          commercial chain link fence supplies near me,	
          best commercial cleaning products,
          commercial supply company,
          commercial cleaning chemicals,
          commercial cleaning products near me,
          zep window cleaner concentrate,
          commercial grade disinfectant wipes,
          commercial suppliers,
          servicemaster cleaning products,
          commercial cleaning supplies wholesale,
          commercial kitchen cleaning products,
          commercial grade cleaning supplies,
          office cleaning supplies near me,
          best smelling commercial cleaning products,
          commercial cleaning equipment for sale,
          commercial restroom supplies near me,
          zep quick clean disinfectant spray,
          commercial bathroom supplies wholesale,
          commercial carpet cleaning supplies,
          commercial window cleaning products,
          office cleaning supplies wholesale,
          commercial eco cleaning products"
          />
        </Helmet>
        <div className='wall-paper-top-cont'>
          <div className='wall-paper-top'>
          </div>
          <LongBanner type="type5"/>
        </div>

        <div className='wall-paper-bottom-dash_v2'>
          <div className='wall-paper-title-cont-V2'>
            <div className='wall-paper-bottom-title_v2'>
              DISINFECTIING/SANITIZING SERVICES
            </div>
            <Link to='/contact'><div className="wall-paper-bottom-click_v2"> GET IN TOUCH WITH US </div></Link>
          </div>
          <div className='video-cont'>
            <video width="360px" height="202px" controls src={"/Video/Fumigation.mp4"} autoPlay loop muted/>
            
          </div>
        </div>
        {/* 
         */}

        <div className='introduce-cont'>
          <div className='introduce-pic-cont'>
            {this.Triangle()}
          </div>
          <div className='introduce-stringbox'>
            <div className='innerbox'>
              <div className='introduce-string-title'>About APEX Business Maintenance, Inc</div>
              <div className='introduce-string-textbox1'>
                APEX has been serving for over 30 years of experience and a staff committed to the best customer service. Our professional maintenance crews are licensed, insured, bonded and they have years of experience in the industry. We are not only dedicated to enhancing the visual appeal of your facility, but also providing a more sanitary environment  and healthier place of business. 
              <div className='introduce-string-textbox2'>
                Simply think of APEX as your business partner who works late every night.
              </div>
            </div>
            <div className='section-cont' >

              <div className='section-title' id='popupbtn1' >Communication</div>
              <div className='popup' id='popup1'>
                Communication between you and your cleaning crew is very important for those special needs you may have. With APEX , you will be assigned an account executive who will inspect and see to your specialized needs on a regular schedule. In addition, a log sheet is maintained on each account where periodic phone calls or personal inspections are made by our representatives.
              </div>
              <div className='section-title' id='popupbtn2'>Experience</div>
              <div className='popup' id='popup2'>
                APEX takes pride in integrity and expertise. Throughly trained on all standardized cleaning procedures, each APEX personnel services your building as their own. You can be assured that your company will benefit from our experience and ability to perform consistently and effectively.
              </div>
              <div className='section-title' id='popupbtn3'>Services</div>
              <div className='popup' id='popup3'>
                APEX will provide you with a customized work schedule based on your site-specific requirements. We recognize, understand and acknowledge the importance of a clean working environment, That is why we are dedicated to improving the appearance of your facilities with our thorough, detailed, professional and personalized services.
              </div>
            </div>
            <div className='section-textbox-cont' >
              <div className='section-textbox'>
                Communication between you and your cleaning crew is very important for those special needs you may have. With APEX , you will be assigned an account executive who will inspect and see to your specialized needs on a regular schedule. In addition, a log sheet is maintained on each account where periodic phone calls or personal inspections are made by our representatives.
              </div>
              <div className='section-textbox'>
                APEX takes pride in integrity and expertise. Throughly trained on all standardized cleaning procedures, each APEX personnel services your building as their own. You can be assured that your company will benefit from our experience and ability to perform consistently and effectively.
              </div>
              <div className='section-textbox'>
                APEX will provide you with a customized work schedule based on your site-specific requirements. We recognize, understand and acknowledge the importance of a clean working environment, That is why we are dedicated to improving the appearance of your facilities with our thorough, detailed, professional and personalized services.

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