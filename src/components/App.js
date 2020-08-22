import React from 'react';
import DateSelector from './dateSelection/DateSelector'

import {BrowserRouter as Router, Route} from 'react-router-dom';
import TimeSlotSelector from './timeSelection/TimeSlotSelector';
export default class App extends React.Component {

  // Book button
  render(){
    return (
      <div>
          <Router>         
              <Route path='/' component={DateSelector} exact/>
              <Route path='/timeslots' component={TimeSlotSelector} exact/>
          </Router>
      </div>      
    );
  }
}

