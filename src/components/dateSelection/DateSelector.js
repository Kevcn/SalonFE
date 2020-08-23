import logo from '../../logo.svg';
import '../../App.css';

import React, {useState} from 'react';
import { withRouter  } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class DateSelector extends React.Component {    
    state = {
        selectedDate: new Date()
    }

    handleChange = (date) => {
        this.setState({
            selectedDate: date
        })
    }

    handleSelect =(date) => {
        console.log(date);
        this.props.history.push({
            pathname: "/timeslots",
            date: date
        });
    }

    render(){
        return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Date selection page
                </p>
                <DatePicker 
                    selected={this.state.selectedDate} 
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                    dateFormat='MM-dd'
                    inline
                    // minDate = {new Date()}
                    />
                
            </header>
        </div>
        )
    }
}