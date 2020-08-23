import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class BookingButton extends React.Component {
    
    render(){
      return (
        <div className="BookingButtonContainer">
          <p className="SubHeader">10% Student Discount</p>
            <Link to='/dateselector' className="button">Book Now</Link>
        </div>             
      );
    }
  }
  