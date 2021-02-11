import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./nav.css";

export default class Nav extends React.Component {
  constructor(props){
    super(props)
    this.state={
      renderPopup: false
    }
    this.renderPopup = this.renderPopup.bind(this)
  }

  renderPopup(){
    const{renderPopup} = this.props;
    return renderPopup ? <div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div> : <div/>
  }
  render() {
    return (
      <div style={{ position: "fixed", zIndex: 1, width:"100%", backgroundColor: "rgb(255, 252, 246)"}}>
        <div className="test">
          <img
            className="APEX-LOGO"
            src="https://static.wixstatic.com/media/56b186_9f935654f6264c5c86856117b25c1321~mv2.jpg/v1/fill/w_400,h_156,al_c,q_80,usm_0.66_1.00_0.01/Apex%20BCMR%20logo%20construction%20focus.webp"
          />
        </div>

        <nav className="Rectangle-31">
          <Link to="/">
            <span className="Home">HOME</span>
          </Link>
          <NavLink to="/service">
            <span className="CORONAVIRUS-DISINFECTION-SERVICES">
              CORONAVIRUS DISFINFECTION SERVICES
            </span>
          </NavLink>
          <NavLink to="/cleaning">
            <span className="COMMERCIAL-CLEANING">COMMERCIAL CLEANING</span>
          </NavLink>
          <NavLink to="/supplie">
            <span className="SUPPLIES">SUPPLIES</span>
          </NavLink>
          <NavLink to="/contact">
            <span className="CONTACT">CONTACT</span>
          </NavLink>
        </nav>
        <nav className='nav-mobile'>
          <hamburger onClick={ () => this.setState({renderPopup: !this.state.renderPopup})} />
          {this.renderPopup}
        </nav>
      </div>
    );
  }
}
