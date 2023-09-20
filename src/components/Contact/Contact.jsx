import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill, BsFillChatsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const contact = () => {
  return (
    <div>
      <section className="c-wrapper">
        <div className="paddings innerwidth flexCenter c-container">
          {/* ===== left Side ===== */}
          <div className="flexColStart c-left">
            <span className="orangeText">Our Contacts</span>
            <span className="primaryText">Easy to contact us</span>
            <span className="secondaryText">
              We are always ready to help by providing the best service to you
              We believe a good to place to live can make your life better
            </span>
            <div className="flexColStart contactModes">
              {/* First Row */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart">
                      <span className="primaryText">Call</span>
                      <span className="secondaryText"> +12105804358</span>
                    </div>
                  </div>
                  <div className="flexCenter button">
                    <a href="tel:+234 8069831553">Call Now</a>
                  </div>
                </div>
                {/* Second Box */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart">
                      <span className="primaryText">Chat </span>
                      <span className="secondaryText"> 021 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">
                    <a href="mailto:joshlokosu18@hmail.com">Chat Now</a>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart">
                      <span className="primaryText">Video</span>
                      <span className="secondaryText"> 021 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Video Call Now</div>
                </div>
                {/* Second Box */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <HiChatBubbleBottomCenter size={25} />
                    </div>
                    <div className="flexColStart">
                      <span className="primaryText">Message</span>
                      <span className="secondaryText"> 021 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Message Now</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="c-right">
            <div className="image-container">
              <img src="./contact.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
