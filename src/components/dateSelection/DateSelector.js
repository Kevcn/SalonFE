import logo from '../../logo.svg';
import '../../App.css';

import React, {useState} from 'react';

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
    }

    render(){
        return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Date selection page
                </p>
                {/* {this.state.dayAvailability.map(availability => <SingleDate key={availability.date} {...availability}/>)} */}

                <DatePicker 
                    selected={this.state.selectedDate} 
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                    dateFormat='MM/dd'
                    minDate = {new Date()}

                    />
                
            </header>
        </div>
        )
    }
}