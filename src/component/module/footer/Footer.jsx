import React from "react";
import "./footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <footer className="Rectangle-33">
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
        </footer>
      </div>
    );
  }
}
