import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import LongBanner from '../module/long_banner/Longbanner'
import Squre from '../module/square/Square'
import Rectangle from '../module/rectangle/rectangle'
import './disinfecting.scss'
import {Helmet} from 'react-helmet'
export class disinfecting extends React.Component{
  
  render(){
    const Offices =["Desk surfaces", "Chair arms", "Doorknobs", "Light Switches", "Phones", "Keyboard", "Mouse devices", "Office machinery" ]
    const Common = ["Door handles","Entryway doors","Handrails", "Elevator buttons","Cabinet handles"]
    const Lunchrooms = ["Tables","Chair arms", "Sinks", "Water dispenser", "Light switches"];
    const Restrooms =["Toilets", "Faucets", "sinks", "Doorknobs", "Light switches", "Keyboard"];
    
    return(
      <div className='disinfecting'>
        <Helmet>
          <title>Apex-Disinfecting</title>
          <meta name="description" content="With over 30 years of experience in the cleaning industry APEX has now teamed up with EPA approved disinfectants and drastic measures that strictly adhere to the CDC guidelines for our disinfecting application process."/>
          <meta name="keywords"  content="
          sanitization,
          disinfectant,
          household disinfectant,
          lysol disinfect,
          sanitation,
          uv sanitizing,
          homemade disinfectant,
          cleaning disinfectant,
          electrolyzed water,
          natural disinfectant,
          electrostatic disinfection,	
          windex disinfectant,
          diy disinfectant,
          sanitise,
          clorox anywhere,
          carpet disinfectant,
          epa disinfectant,
          best disinfectant,
          air disinfectant,
          disinfectant company,
          sanitizing with bleach,
          shockwave disinfectant,
          fabric disinfectant,
          bleach water disinfectant,
          disinfectant liquid,
          phenol disinfectant,
          commercial disinfectant,
          vodka as disinfectant
          "/>
        </Helmet>
        <div className='wall-paper-top'>
          <div className='title'>Disinfecting • Sanitizing Services</div>
          <div className='sub-title'>WE KEEP YOUR WORK PLACE HEALTHY</div>
        </div>


        <div className='introducing'>
          Introducing Disinfecting • Sanitizing Services from APEX Building Maintenance
        </div>
        <div className='red-title'>COVID -19 DISINFECTING SERVICE</div>
        <div className='text'>
          <div>With over 30 years of experience in the cleaning industry APEX has now teamed up with EPA approved </div>
          <div>disinfectants and drastic measures that strictly adhere to the CDC guidelines for our disinfecting application process.</div>
        </div> 
        <div className='highlightText'>HIGH TRAFFIC TOUCH AREAS FOR DISINFECTING SERVICES</div>
        <div className="rectangle-cont">

            <Rectangle page={"test"} wordsOne={"| Offices |"} wordsArray ={Offices} textColor="white" backgroundImageUrl='/img/office.png'/>
            <Rectangle page={"test"} wordsOne={"| Common  Areas |"} wordsArray ={Common} textColor="white" backgroundImageUrl='/img/commonarea.png'/>
            <Rectangle page={"test"} wordsOne={"| Lunchrooms |"} wordsArray ={Lunchrooms} textColor="white" backgroundImageUrl='/img/lunchroom.png'/>
            <Rectangle page={"test"} wordsOne={"| Restrooms |"} wordsArray ={Restrooms} textColor="white" backgroundImageUrl='/img/restroom.png'/>

        </div>
        <div className='red-title_v2'>COVID -19 DISINFECTING SERVICE</div>
        <div className='text'>
          <div>Our crew has been trained to perform high level disinfection services using our electric ULV sprayer </div>
          <div>and EPA Approved disinfectants having the sole priority of our clients safety. </div>
        </div>
        <div className="highlightText_v2">APEX's FUMIGATION: </div>
        <div className='textList'>
          <div>We adhere to the CDC guidelines including the usage of PPE.</div>
          <div>We use an electric ULC sprayer to provide a touchless application that reduces the rick cross contamination.</div>
          <div>We operate with EPA approved disinfectants to kill viruses that reside on surface.</div>
        </div>
        <div className='wall-paper-bottom'>
          <div className='darkbox'>
            <LongBanner type='type4' displayButton/>   
          </div>
        </div> 
      </div>
    )
  }
}
export default disinfecting;