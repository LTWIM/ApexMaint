import React, {Component} from 'react';
import '../Unsubscribe/unsubscribe';
import {Route, Link} from 'react-router-dom';

export class unsubscribed extends React.Component{
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
              You are now successfully unsubscribed
            </div>
            <div className="unsubscribe-text">
              You've been successfully unsubscribed from out newsletters and your email has been removed from the list. We're really sorry to see you go.
            </div>
            <div className="space"></div>
          </div>
      </div>
    )
  }
}

export default unsubscribed;