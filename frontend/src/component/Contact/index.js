import React from 'react'
import "./styles.scss"
import LongBanner from '../module/long_banner/Longbanner'

const Contact = () => {

  return (
    <div className='contact-wrapper'>
      <LongBanner type='type4' backgroundImageUrl="/img/bottomLogo.svg" displayButton={false}/>
      <div className="contact-cntt-cnt">
        <div className='contct-cnnt-hdr'>
          <h2>Customer Services</h2>
          <span>We'll get back to you within 1 business day from your inquiry.<br />
          In order for us to provide you with the bes fitted service, please describe your<br />
          inquiry as detailed as you can in the details area.
          </span>
        </div>
        <div className='contct-inpt-cnt'>
          <input type='text' className="contct-inpt" placeholder="Name"/>
        </div>
        <div className='contct-inpt-cnt'>
          <input type='text' className="contct-inpt" placeholder="Email"/>
        </div>
        <div className='contct-inpt-cnt'>
          <input type='text' className="contct-inpt" placeholder="Phone"/>
        </div>
         <div className='contct-inpt-cnt'>
          <input type='text' className="contct-inpt" placeholder="Subject"/>
        </div>
        <div className='contct-txtar-cnt'>
          <textarea type='text' className='contct-txtar' placeholder="Details..."></textarea>
        </div>
        <div className="contct-sbmit-btn-cnt">
          <button className='contct-sbmit-btn'>Send</button>
        </div>
      </div>
    </div>

  )
}

export default Contact