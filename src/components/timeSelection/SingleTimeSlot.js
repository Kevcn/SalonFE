import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class SingleTimeSlot extends React.Component {

    render(){
        const availability = this.props;
        
        const available = availability.available ?
            "transparent" :
            "#d6e0f0";

        const disableButton = availability.available ?
             "auto" :
             "none";

        const border = availability.available ?
             "#222831" : // Black
             "#d6e0f0"; // Grey

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

        const displayLabel = availability.available ?
            timeSlotLabels[availability.timeSlotID - 1] :
            "Full";

        return (
            <section className="TimeSlotBlock">
                <Link to={{
                    pathname: '/book',
                    appointmentTime: {
                        date: availability.date,
                        timeSlotID: availability.timeSlotID,
                        timeSlotLabel: timeSlotLabels[availability.timeSlotID - 1]}
                        }}
                        className="button"
                        style={{background: available, pointerEvents: disableButton, borderColor: border }}
                        >
                            {displayLabel}
                </Link>
            </section>
        )
    }
}