import React from 'react'
import sectionRight from "../../../../../../common/Images/ContactGroupColors.png"
import blue from "../../../../../../common/Images/blueCircle.png"
import orange from "../../../../../../common/Images/orangeCircle.png"
import pink from "../../../../../../common/Images/pinkCircle.png"
import green from "../../../../../../common/Images/greenCircle.png"
function SectionOne() {
  return (
    <div className="section contact-sectionOne-container">
      <div className="SectionPadding contact-sectionOne-left">
        <h1>Information About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
          amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
          quis bibendum quam.
        </p>
        <img src={sectionRight} alt="slow internet :(" className="" />
      </div>
      <div className="SectionPadding contact-sectionOne-right">
        <h1>Contact Way</h1>
        <div className="contact-sectionOne-right-box">
          <div className="contact-sectionOne-right-itemLeft">
            <div className="contact-sectionOne-right-itemLeft-items">
              <img src={blue} alt="loading..." />
              <div>
              <p>Tel: 090078601</p>
              <p>shop@gmail.com</p>
              </div>
            </div>
            <div className="contact-sectionOne-right-itemLeft-items">
              <img src={orange} alt="loading..." />
            <div>
              <p>Catt London</p>
            </div>
            </div>
          </div>
          <div className="contact-sectionOne-right-itemRight">
            <div className="contact-sectionOne-right-itemRight-items">
              <img src={pink} alt="loading..." />
              <div>
              <p>Support Forum</p>
              <p>For over 24 hours</p>
              </div>
            </div>
            <div className="contact-sectionOne-right-itemRight-items">
              <img src={green} alt="loading..." />
              <div>
              <p>Free standard shipping</p>
              <p>on all order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne