import React from 'react';
import headerIcon from '../../images/align-right-solid.svg';

export default class ContactUs extends React.Component {
    
    render(){
      return (
        <div className="ContactUsContainer">
          <div className="flexbox HeaderContainer">
            <img src={headerIcon} className="headerIcon"></img>
            <span className="Header">CONTACT US</span>
          </div>
          <div className="flexbox">

            <div className="ContactDetails">
                <a href="tel: +44 7551953808">07551 953808</a>
                <p>93 Princess St</p>
                <p>Manchester, M1 4HT</p>
            </div>

            <div id="locationMap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d396.19366501462326!2d-2.240730209970001!3d53.47777061023961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x137afb49f8da8d21!2sJun%20Hair%20Salon!5e0!3m2!1sen!2suk!4v1598726015118!5m2!1sen!2suk"  ></iframe>
            </div>

          </div>
        </div>             
      );
    }
  }
  