import React, {Component} from 'react';
import '../Unsubscribe/unsubscribe.scss';

export class fourOfour extends React.Component{
  render(){
    return(
      <div className='four-o-four-cont'>
        <div className='unsubscribe-page'>
          <div className="unsubscribe-innerbox">
            <div className="unsubscribe-imgbox">
              <img src="/logo/apexOld.png" width='30%'></img>
            </div>
            <div className="unsubscribe-innerbox-top-textbox">
              404
            </div>
            <div className="unsubscribe-text">
              Sorry, the page you looking for were not found
            </div>
            <div className="space"></div>
          </div>
      </div>
      </div>
    )
  }
}

export default fourOfour;