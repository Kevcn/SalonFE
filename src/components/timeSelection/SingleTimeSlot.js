import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class SingleTimeSlot extends React.Component {
        
    componentDidMount(){
        console.log(this.props)
    }
    
    render(){
        const availability = this.props;
        
        const available = availability.available ?
            "transparent" :
            "#a3a3c2";

        const disableButton = availability.available ?
             "auto" :
             "none";

        const timeSlotLabels = [
            "11:00", "11:30", 
            "12:00", "12:30",
            "13:00", "13:30", 
            "14:00", "14:30", 
            "15:00", "15:30", 
            "16:00", "16:30", 
            "17:00", "17:30", 
            "18:00", "18:30"
        ];

        return (
            <section class="TimeSlotBlock">
                <Link to={{
                    pathname: '/book',
                    appointmentTime: {
                        date: availability.date,
                        timeSlotID: availability.timeSlotID,
                        timeSlotLabel: timeSlotLabels[availability.timeSlotID - 1]}
                        }}
                        className="button"
                        style={{textDecoration: "none", background: available, pointerEvents: disableButton}}
                        >
                            {timeSlotLabels[availability.timeSlotID - 1]}
                </Link>
            </section>
        )
    }
}