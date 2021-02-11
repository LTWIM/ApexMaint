import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import LongBanner from "../module/long_banner/Longbanner.jsx";
import "./style.scss"

export class Commercial extends React.Component{
  render(){
        return(
            <div className='commercial-cont'>
            <div className='janitorial-cont'>
                <LongBanner type="type1" content={<span className='big-sp'>janitorial services<br/><span className="small-sp">commercial cleaning services</span></span>}/>
              
            </div>
            <div>
                <h1 style={{textAlign:"center", marginTop:"100px"}}>OUR SERVICES</h1>
                <div>
                    <LongBanner sideContent={"We get it, it's essential to keep your workspace nice and clean, but hiring someone to do so is always trouble some. Trust us to manage your janitorial services."}type="type2" content={<span className='typ2-banner-cntt'>Janitorial Services</span>}/>
                    <LongBanner sideContent={"Carpet and upholstery are big investments for any business, and keeping them looking great is important to the image that your company portrays. Keep them clean the apex way."}type="type2" content={<span className='typ2-banner-cntt'>Carpet Cleaning</span>}/>
                    <LongBanner sideContent={"Ceilings are easy to leave off your cleaning list, but keeping them clean will reduce the risk of dust build up in your office."}type="type2" content={<span className='typ2-banner-cntt'>Ceiling</span>}/>
                    <LongBanner sideContent={"Each type of floor has its own guidelines on cleaning. Let us handle the detailed maintenance of your floor."}type="type2" content={<span className='typ2-banner-cntt'>Floor Striping,<br/>Sealing And Waxing</span>}/>
                    <LongBanner sideContent={"Smudges, fingerprints, and watermarks never look good on a window. Apex Maintenance will keep your windows crystal clean."}type="type2" content={<span className='typ2-banner-cntt'>Window Cleaning</span>}/>
                    <LongBanner type="type3" />
                </div>
            </div>
            </div>
        
        )
  }
}
export default Commercial;