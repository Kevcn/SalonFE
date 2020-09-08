import React, {useState} from 'react';
import Success from './Success';
import SlotTaken from './SlotTaken';
import BookingError from './BookingError';

export default class Confirmation extends React.Component {

    state = {
        success: "",
        slotTaken: "",
        bookingError: "",
        timeSlotLabel: "",
        date: ""
    }
   
    componentDidMount(){

        const monthNames = [
            "Jan", "Feb", 
            "March", "April", 
            "May", "June",
            "July", "Aug", 
            "Sep", "Oct", 
            "Nov", "Dec"
        ];

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

        if (this.props.location.data != undefined) {
                    
            const status = this.props.location.data.status

            let rawDate = this.props.location.data.data.date.split('T')[0].replace(/-0+/g, '-');
            let day = rawDate.split('-')[2];
            let month = rawDate.split('-')[1];
            let year = rawDate.split('-')[0];
            
            const dateLabel = `${day}${this.appendDateSuffix(day)} ${monthNames[month - 1]} ${year}`;

            this.setState({ date: dateLabel  });
            this.setState({ timeSlotLabel: timeSlotLabels[this.props.location.data.data.timeSlotID - 1] })

            this.setState({ success: status == 200 ? true : false });
            this.setState({ slotTaken: status == 400 ? true : false });
            this.setState({ bookingError: status == 500 ? true : false });
        }
    }

    appendDateSuffix = (date) => {
        if (date > 3 && date < 21) return 'th';
        switch (date % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
        }
    }

    render(){
        return (
        <div className="ConfirmationPageContainer">
            {this.state.success ? <Success timeslot={this.state.timeSlotLabel} date={this.state.date} /> : null }

            {this.state.slotTaken ? <SlotTaken /> : null}

            {this.state.bookingError ? <BookingError /> : null }
        </div>
        )
    }
}