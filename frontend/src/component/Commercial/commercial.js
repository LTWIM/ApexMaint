import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import LongBanner from "../module/long_banner/Longbanner.jsx";
import "./style.scss"
import {Helmet} from "react-helmet"

export class Commercial extends React.Component{
  render(){
        return(
            <div className='commercial-cont'>
                <Helmet>
                    <title>Apex-Commercial Cleaning</title>
                    <meta name="description" content="Professional Commercial Cleaning for Los Angeles, Orange County, Riverside, San Bernardino"/>
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
                    commercial eco cleaning products"/>
                </Helmet>
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