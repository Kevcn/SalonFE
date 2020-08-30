import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class BookingButton extends React.Component {
    
    render(){
      return (
        <div className="LandingPageContainer">
          <div className="overlay">
            <span className="SubHeader">10% Student Discount</span>
            <Link to='/dateselector' className="button" style={{color: "#fff", borderColor: "#fff"}}>BOOK NOW</Link>
          </div>            
        </div>             
      );
    }
  }
  