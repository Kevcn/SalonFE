import React from 'react';
import DateSelector from './dateSelection/DateSelector'

import {BrowserRouter as Router, Route} from 'react-router-dom';
import TimeSlotSelector from './timeSelection/TimeSlotSelector';
import BookingForm from './bookAppointment/BookingForm';

export default class App extends React.Component {

  // Book button
  render(){
    return (
      // frame - header, 
      // route for home page to display static details
      <div>
          <Router>
              <Route path='/dateselector' component={DateSelector} exact/>
              <Route path='/timeslots' component={TimeSlotSelector} exact/>
              <Route path='/book' component={BookingForm} exact/>
          </Router>
      </div>      
    );
  }
}

