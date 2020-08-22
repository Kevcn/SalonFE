import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TimeSlotSelector from '../timeSelection/TimeSlotSelector';
import styled from 'styled-components';

const SingleDateBlock = styled.div`
  background: #66ffc2;
  padding: 1%;
  margin: 0.5%;
  width: 10%;
`

export default class SingleDate extends React.Component {

    componentDidMount(){
        console.log(this.props);
    }

    render(){
        const availability = this.props;      
        
        const month = availability.date.split('T')[0].split('-')[1];
        const day = availability.date.split('T')[0].split('-')[2];

        const available = availability.available ? "Book" : "Full";
        return (
            <SingleDateBlock>
                <Link to={{ 
                    pathname: '/timeslots', 
                    timeSlotDate: { 
                        date: availability.date, 
                        available: availability.available} 
                        }} style={{ textDecoration: "none" }}>

                    {month}/{day}
                </Link>
                <h5>{available}</h5>
            </SingleDateBlock>            
        )
    }
}