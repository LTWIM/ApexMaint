import React from "react";
import "./triangle.css";
import pic from "../../pic.png";

export default class Triangle extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <img
            src={pic}
            style={{
              marginLeft:"-20px",
              marginRight: "60px",
              marginTop: "85px",
            }}
          />
        </div>
        <div>
          <div style={{ width: "905px", height: "234px" }}>
            <h1>About Apex Business Maintenance, INC</h1>
            <br />
            <p>
              APEX has been serving for over 30 years of experience and a staff
              committed to the best customer service. Our professional
              maintenace crews are llicensed, insured, bonded and they have
              years of experience in the industry. We are not only dedicated to
              enhanceing the visual appeal of your facility, but also providing
              a more sanitary environment and healthier place of business.
              <br />
              Simply think of APEX as your business partner who works late every
              night.
            </p>
          </div>
          <div id="container2">
            <div id="paragraph">
              <h4 className="h4">Communication</h4>
              <br />
              <p>
                Communication between you and your cleaning crew is very
                important for those special needs you may have. With APEX, you
                will be assigned an account executive who will inspect and see
                to your specialized needs on a regular schedule. In addition, a
                log sheet is maintained on each account where periodic phone
                calls or personal inspections are made by our representatives.
              </p>
            </div>
            <div id="paragraph">
              <h4 className="h4">Experience</h4>
              <br />
              <p>
                APEX takes pride in intergrity and expertise. Throughly trained
                on all standardized cleaning procedures, each APEX personnel
                services your building as their own. You can be assured that
                your company will benefit from our experience and ability to
                perform consistently and effectively.
              </p>
            </div>
            <div id="paragraph">
              <h4 className="h4">Services</h4>
              <br />
              <p>
                Apex will provide you with a customized work schedule based on
                your site-specific requirements. We recognize, understand and
                acknowledge the importance of a clean working environment, That
                is why we are dedicated to improving the appearance of your
                facilities with our through, detailed, professional and
                personalized services.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
