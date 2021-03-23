import React, {Component} from 'react';
import '../Unsubscribe/unsubscribe.scss';
import {Link, Route} from 'react-router-dom';
import './404.scss'


export class fourOfour extends React.Component{
  render(){
    return(
      <div className='four-o-four-cont'>
        <div className='unsubscribe-page'>
          <div className="unsubscribe-innerbox">
            <div className="unsubscribe-imgbox">
              <Link to='/'>
                <img src="/logo/apexOld.png" width='30%'/>
              </Link>
            </div>
            <div className="unsubscribe-innerbox-top-textbox">
              404
            </div>
            <div className="unsubscribe-text">
              Sorry, the page you looking for were not found
            </div>
            <Link to='/'>
            <div className='home-button'>
              GO BACK TO HOME
            </div>
            </Link>
            
            <div className="space"></div>
          </div>
      </div>
      </div>
    )
  }
}

export default fourOfour;