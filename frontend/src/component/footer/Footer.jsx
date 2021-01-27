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
              <img src="/img/ASSETS/APEXLOGO.png" width='100%'/>
              </div>
            </div> 
            <div className='right-footer'>
              <div className="email">
              {" "}
              <p>Email: infro@apemaint.com</p>
            </div>
            <div className="phone">
              {" "}
              <p>
                Phone: 714.956.5032
                <br />
                951.341.5919
                <br />
                Fax: 714.816.6792{" "}
              </p>
            </div>
            </div>
            
          </div>
        </footer>
      </div>
    );
  }
}

