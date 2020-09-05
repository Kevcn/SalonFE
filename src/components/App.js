import React from 'react';
import DateSelector from './dateSelection/DateSelector'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TimeSlotSelector from './timeSelection/TimeSlotSelector';
import BookingForm from './bookAppointment/BookingForm';
import Navbar from './Nav/Navbar';
import HomePage from './home/HomePage';
import Confirmation from './confirmation/confirmation';
import Login from './Management/Login';
import ViewBookings from './Management/ViewBookings';

export default class App extends React.Component {

  // Book button
  render(){
    return (
      // frame - header, 
      // route for home page to display static details
      <div className="AppContainer">
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' component={HomePage} exact/>
              <Route path='/dateselector' component={DateSelector} exact/>
              <Route path='/timeslots' component={TimeSlotSelector} exact/>
              <Route path='/book' component={BookingForm} exact/>
              <Route path='/confirmation' component={Confirmation} exact/>
              <Route path='/Login' component={Login} exact/>
              <Route path='/ViewBookings' component={ViewBookings} exact/>
            </Switch>              
          </Router>
      </div>      
    );
  }
}

