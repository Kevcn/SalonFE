import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import BookingButton from './BookingButton'
import ProvidedServices from './ProvidedServices';
import OpeningHours from './OpeningHours';
import ContactUs from './ContactUs';

export default class HomePage extends React.Component {

    
    render(){
      return (
        <div className="HomePageContainer">
            <h1>this is home page</h1>
            <BookingButton />
            <ProvidedServices />
            <OpeningHours />
            <ContactUs />
        </div>             
      );
    }
  }
  