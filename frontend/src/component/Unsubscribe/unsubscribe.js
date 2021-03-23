import React, {Component} from 'react';
import './unsubscribe.scss';

import {Link, withRouter} from 'react-router-dom'
import swal from "sweetalert"
import {unsubscribeClient} from '../../util/api_utils/client_api_util'

export class unsubscribe extends React.Component{
  constructor(props){
    super(props)
    this.onUnsubscribe = this.onUnsubscribe.bind(this)
  }
  componentDidMount(){
    console.log(this.props)
  }
  onUnsubscribe(e, match) {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Once unsubscribed, you will not be able to receive any emails from us.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
          // return window.location.href = "https://www.apexmaint.com/#/unsubscribed"
         unsubscribeClient(match.params.id)
         return  window.location.href = "https://www.apexmaint.com/#/unsubscribed"
      } else {
        swal("Thank You For Keep Subscribing Us!");
      }
    });
  }
  render(){
    const {match} = this.props
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
              <div className="unsubscribe-button" onClick={e => this.onUnsubscribe(e, match)}>
                UNSUBSCRIBE
              </div>
            </Link>

              <Link to='/'>
                <div className='home-button'>
                  GO BACK TO HOME
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

export default withRouter(unsubscribe);