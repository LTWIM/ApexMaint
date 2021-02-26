import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import LongBanner from '../module/long_banner/Longbanner'
import "./styles.scss"
import {Helmet} from 'react-helmet'

const FakeData = [
  "TOILET TISSUE",
  "PAPER TOWEL",
  "SEAT COVERS",
  "TRASH BAGS & LINERS",
  "SOAPS & SKIN CARE",
  "ODOR CONTRAL & URINAL PRODUCT"
]
const Supplies = () => {
  return (
    <div className="supplies-wrapper">
      <Helmet>
        <title>Supplies</title>
        <meta name="description" content="With over 30 years of experience in the cleaning industry APEX has now teamed up with EPA approved disinfectants and drastic measures that strictly adhere to the CDC guidelines for our disinfecting application process."/>
        <meta name="keywords"  content="
        carpet cleaning,
        window cleaning,
        house cleaning,
        cleaning services,
        commercial cleaning service,
        green clean,
        office cleaning,
        commercial cleaning,
        spring cleaning,
        cleaning company,
        carpet cleaning Sydney,
        move out cleaning,
        cleaning staff
        hospital cleaning,
        move-in cleaning,
        professional cleaners,
        apartment cleaning,
        post-construction cleaning,
        residential cleaning,
        warehouse cleaningl,
        weekly cleaning,
        rental cleaning,
        monthly cleaning
        "/>        
      </Helmet>
      <div className='supplies-banner-cont'>
      <LongBanner type='type1-1' backgroundImageUrl="/img/bottomLogo.svg" displayButton={false} content={<div><span className="big-sp">SUPPLIES</span>
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