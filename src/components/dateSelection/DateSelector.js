import logo from '../../logo.svg';
import '../../App.css';

import React from 'react';
import axios from 'axios';
import SingleDate from './SingleDate';

export default class DateSelector extends React.Component {
    
    state = {
        dayAvailability: []
    }

    // TODO: Get date = date now
    async componentDidMount() {
        const response = await axios.get(`http://localhost:8080/api/v1/GetDayavailability/2020-08-13`)        

        this.setState({
            dayAvailability: response.data
        })

        console.log(response);
    };    


    render(){
        return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Date selection page
                </p>               

                {this.state.dayAvailability.map(availability => <SingleDate key={availability.date} {...availability}/>)}
            </header>
        </div>
        )
    }
}