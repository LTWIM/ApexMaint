import React,{Component} from 'react'
import './header.scss';
import {ReactComponent as HeaderLogo} from '../img/headerLogo.svg';
// import { APEXLOGO } from '/img/ASSETS/APEXLOGO.png';
import {Link} from 'react-router-dom'
export class header extends React.Component{
  render(){
    return(
      <div>
        <div className='main-logo-top'>
          <div className='main-logo'>
            {/* Logo Pic */}
            <img src="/logo/apexOld.png" width='100%'/>
          </div>
        </div>
        <div className='category-cont'>
          <div className='inner'>
            <div className='subcategory'><Link to="/">HOME</Link> </div>
            <div className='subcategory'><Link to="/disinfecting">CORONAVIRUS DISINFECTION SERVICES</Link></div>
            <div className='subcategory'><Link to="/commercial">COMMERCIAL CLEANING</Link></div> 
            <div className='subcategory'><Link to="/supplies">SUPPLIES</Link></div>
            <div className='subcategory'><Link to="/contact">CONTACT</Link></div>
          </div>
          
          
        </div>
        
      </div>
      
    )
  }
}

export default header