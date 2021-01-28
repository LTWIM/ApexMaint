import React from 'react'
import "./styles.scss"
import LongBanner from '../module/long_banner/Longbanner'

const Contact = () => {

  return (
    <div className='contact-wrapper'>
      <LongBanner type='type4' backgroundImageUrl="/img/bottomLogo.svg" displayButton={false}/>
      <div className="contact-cntt-cnt">
        <div className='contct-cnnt-hdr'></div>
        <div className='contct-inpt-cnt'>
          <input type='text' className="contct-inpt"/>
        </div>
        <div className='contct-inpt-cnt'>
          <input type='text' className="contct-inpt"/>
        </div>
        <div className='contct-inpt-cnt'>
          <input type='text' className="contct-inpt"/>
        </div>
        <div classname='contct-txtar-cnt'></div>
      </div>
    </div>

  )
}

export default Contact