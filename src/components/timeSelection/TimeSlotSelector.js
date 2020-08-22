import React from 'react';
import axios from 'axios';
import SingleTimeSlot from './SingleTimeSlot';

import styled from 'styled-components';

const TimeSlotsContainer = styled.div`
    margin: 0 auto;
    width: 50%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export default class TimeSlotSelector extends React.Component {

    // From SingleDate button

    state = {
        timeSlotAvailability: []
    }

    // TODO: Get date = from props
    async componentDidMount() {
        const queryDate = this.props.location.timeSlotDate.date;
        const response = await axios.get(`http://localhost:8080/api/v1/GetTimeavailability/${queryDate}`)        

        var responseData = response.data;
        for (let i = 0; i < responseData.length; i++) {
            responseData[i] = { ...responseData[i], date: queryDate}            
        }

        // console.log(responseData);       
        // console.log(queryDate);

        this.setState({
            timeSlotAvailability: responseData
        })
        console.log(this.state.timeSlotAvailability);
    };   

    render(){
        const props = this.props;
        return (
            <div>
                <p>Time slot selector</p>
                <TimeSlotsContainer>
                    {this.state.timeSlotAvailability.map(availability => <SingleTimeSlot key={availability.timeSlotID} {...availability}/>)}
                </TimeSlotsContainer>               
            </div>
        )
    }
}