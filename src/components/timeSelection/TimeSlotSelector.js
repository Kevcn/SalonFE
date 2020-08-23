import React from 'react';
import axios from 'axios';
import SingleTimeSlot from './SingleTimeSlot';

export default class TimeSlotSelector extends React.Component {

    state = {
        timeSlotAvailability: [],
        month: [],
        day: []
    }

    async componentDidMount() {
       
        const year = this.props.location.date.getFullYear();
        const month = this.props.location.date.getMonth() + 1;
        const day = this.props.location.date.getDate();

        const queryDate = [year, month, day].join('-');

        console.log(queryDate);

        const response = await axios.get(`http://localhost:8080/api/v1/GetTimeavailability/${queryDate}`)        

        var responseData = response.data;
        for (let i = 0; i < responseData.length; i++) {
            responseData[i] = { ...responseData[i], date: queryDate}            
        }

        this.setState({
            timeSlotAvailability: responseData,
            month: month,
            day: day
        })
        console.log(this.state.timeSlotAvailability);

    };   

    render(){
        const props = this.props;
        return (
            <div>
                <p>Time slot selector</p>
                <h2>Month - {this.state.month}</h2>
                <h2>Day - {this.state.day}</h2>

                <div class="TimeslotContainer">
                    {this.state.timeSlotAvailability.map(availability => <SingleTimeSlot key={availability.timeSlotID} {...availability}/>)}
                </div>             
            </div>
        )
    }
}