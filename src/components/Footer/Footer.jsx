import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <section className="f-wrappwer">
      <div
        className="paddings innerwidth flexCenter
       c-container"
      >
        {/* Left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png " alt="" />
          <span className="secondaryText">
            Our vision is to make all people <br /> the best place to live for
            them
          </span>
        </div>
        <div className=" flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText"> 145 New york , Fl 4571 , USA</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default footer;
