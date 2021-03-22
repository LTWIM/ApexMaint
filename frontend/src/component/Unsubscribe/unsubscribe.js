import React, {Component} from 'react';
import './unsubscribe.scss';
import {Link} from 'react-router-dom'
export class unsubscribe extends React.Component{
  render(){
    return(
      <div className='unsubscribe-page'>
          <div className="unsubscribe-innerbox">
            <div className="unsubscribe-imgbox">
              <Link to='/'>
                <img src="/logo/apexOld.png" width='30%'/>
              </Link>
            </div>
            <div className="unsubscribe-innerbox-top-textbox">
              GETTING TOO MUCH EMAIL?
            </div>
            <Link to ="/unsubscribed">
              <div className="unsubscribe-button">
                UNSUBSCRIBE
              </div>
            </Link>
            <div className="unsubscribe-text">
              You will not receive any more emails from APEX Building Maintenance.
            </div>
            <div className="space"></div>
          </div>
      </div>
    )
  }

}

export default unsubscribe;