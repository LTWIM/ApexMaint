import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import LongBanner from '../module/long_banner/Longbanner'
import "./styles.scss"
const Supplies = () => {
  return (
    <div className="supplies-wrapper">
      <LongBanner type='type1' backgroundImageUrl="/img/bottomLogo.svg" displayButton={false} content={<div><span className="big-sp">SUPPLIES</span>
          <br/>
          <span className="small-sp">Supplies at wholesale price delivered for free</span></div> }/>
      <div className="supplies-hdr-container"></div>
      <div className="supplies-cntt-cntr" style={{backgroundImage: `url(/img/restroom.png)`}}></div>
      <div className='wall-paper-bottom spplies-btm'>
          <div className='darkbox'>
            <LongBanner type='type4' displayButton/>   
          </div>
        </div> 
    </div>
  )
}
export default Supplies;