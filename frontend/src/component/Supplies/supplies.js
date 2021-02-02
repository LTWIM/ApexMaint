import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import LongBanner from '../module/long_banner/Longbanner'
import "./styles.scss"
const FakeData = [
  "Restroom",
  "Restroom",
  "Restroom",
  "Restroom",
  "Restroom",
  "Restroom"
]
const Supplies = () => {
  return (
    <div className="supplies-wrapper">
      <div className='supplies-banner-cont'>
      <LongBanner type='type1' backgroundImageUrl="/img/bottomLogo.svg" displayButton={false} content={<div><span className="big-sp">SUPPLIES</span>
          <br/>
          <span className="small-sp">Supplies at wholesale price delivered for free</span></div> }/>
      </div>
      <div className="supplies-hdr-container">
        <span className="supplies-hdr">Supplies</span>
      </div>
      <div className="supplies-cntt-cntr" style={{ backgroundImage: `url(/img/restroom.png)` }}>
        {FakeData.map((ele, idx) => {
          return <div className="supply-squares" >
            <span className='supply-square-spn'>{ele}</span>
          </div>
        })}
      </div>
      <div className='wall-paper-bottom spplies-btm'>
          <div className='darkbox'>
            <LongBanner type='type4' displayButton/>   
          </div>
        </div> 
    </div>
  )
}
export default Supplies;