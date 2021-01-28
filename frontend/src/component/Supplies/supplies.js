import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import LongBanner from '../module/long_banner/Longbanner'
import '../Disinfecting/disinfecting.scss'

export class Supplies extends React.Component{
  render(){
    return(
      <div>
        <div className='wall-paper-bottom'>
          <div className='darkbox'>
            <LongBanner type='type4' displayButton/>        
          </div>
        </div>  
      </div>
    )
  }
}
export default Supplies;