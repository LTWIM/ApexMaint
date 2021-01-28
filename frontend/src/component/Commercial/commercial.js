import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import LongBanner from "../module/long_banner/Longbanner.jsx";

export class Commercial extends React.Component{
  render(){
        return(
            <div>
            <div>
                <LongBanner type="type1" content={<span className='hero-banner-cntt'>janitorial services<br/>commercial cleaning services</span>}/>
              
            </div>
            <div>
                <h1 style={{textAlign:"center", marginTop:"100px"}}>OUR SERVICES</h1>
                <div>
                    <LongBanner type="type2" content={<span className='typ2-banner-cntt'>Janitorial Services</span>}/>
                    <LongBanner type="type2" content={<span className='typ2-banner-cntt'>Carpet Cleaning</span>}/>
                    <LongBanner type="type2" content={<span className='typ2-banner-cntt'>Ceiling</span>}/>
                    <LongBanner type="type2" content={<span className='typ2-banner-cntt'>Floor Striping,<br/>Sealing And Waxing</span>}/>
                    <LongBanner type="type2" content={<span className='typ2-banner-cntt'>Window Cleaning</span>}/>
                    <LongBanner type="type3" />
                </div>
            </div>
            </div>
        
        )
  }
}
export default Commercial;