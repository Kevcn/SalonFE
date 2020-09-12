import React from 'react';

export default class SingleBookingRecord extends React.Component {    
 
    render(){
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
        <div className="SingleBookingContainer flexbox">
            <h2>{timeSlotLabels[this.props.timeSlotID - 1]}</h2>
            <div>
                <h3>{this.props.contact.name}</h3>
                <h3>{this.props.contact.phone}</h3>
            </div>
        </div>
        )
    }
}