import React from "react";
import "./footer.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <footer className="Rectangle-33">
          <div className='footer-contents'>
            <div className='left-footer'>
              <div className='footer-logo'> 
              {/* pic  */}
              <img src="/logo/apexOld.png" width='100%'/>
              </div>
            </div> 
            <div className='right-footer'>
              <div className="email">
              {" "}
              <p>Email: info@apexmaint.com</p>
            </div>
            <div className="phone">
              {" "}
              <p>
                Phone: 714.956.5032
                <br />
                <br />
                Fax: 714-956-8196{" "}
              </p>
            </div>
            </div>
            
          </div>
        </footer>
      </div>
    );
  }
}

