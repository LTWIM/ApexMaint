import React,{Component} from 'react'
import './header.scss';
import {ReactComponent as HeaderLogo} from '../img/headerLogo.svg';

export class header extends React.Component{
  render(){
    return(
      <div>
        <div className='main-logo-top'>
          <div className='main-logo'>
            Logo Pic
          </div>
        </div>
        <div className='category-cont'>
          <div className='inner'>
            <div className='subcategory'>HOME </div>
            <div className='subcategory'>CORONAVIRUS DISINFECTION SERVICES</div>
            <div className='subcategory'>COMMERCIAL CLEANING</div> 
            <div className='subcategory'>SUPPLIES</div>
            <div className='subcategory'>CONTACT</div>
          </div>
          
          
        </div>
        
      </div>
      
    )
  }
}

export default header