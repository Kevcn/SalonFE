import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TimeSlotSelector from '../timeSelection/TimeSlotSelector';


export default class SingleDate extends React.Component {

    componentDidMount(){
        // console.log(this.props);
    }

    render(){
        const availability = this.props;
        // TODO: disable button if the no availability 
        return (
            <div>                
                <Link to={{ 
                    pathname: '/timeslots', 
                    timeSlotDate: { 
                        date: availability.date, 
                        available: availability.available} 
                        }}>

                    {availability.date}
                </Link>
            </div>
        )
    }
}