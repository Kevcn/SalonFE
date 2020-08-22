import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import styled from 'styled-components';

const TimeSlotBlock = styled.div`
  background: #66ffc2;
  padding: 2%;
  margin: 0.5%;
  width: 40%;
`

export default class SingleTimeSlot extends React.Component {
    
    componentDidMount(){
        console.log(this.props)
    }
    
    // TODO: available is coming through, disbale button if it is not available

    render(){
        const availability = this.props;
        
        const month = availability.date.split('T')[0].split('-')[1];
        const day = availability.date.split('T')[0].split('-')[2];

        const available = availability.available ? "Book" : "Full";
        return (
            <TimeSlotBlock>
                <div>{availability.timeSlotID}</div>
                <div>{availability.available}</div>
                <Link to={{ 
                    pathname: '/book',
                    appointmentTime: { 
                        date: availability.date, 
                        timeSlotID: availability.timeSlotID,
                        timeSlotLabel: "temptimeslotLabel"}
                        }}>
                </Link>
            </TimeSlotBlock>
        )
    }
}