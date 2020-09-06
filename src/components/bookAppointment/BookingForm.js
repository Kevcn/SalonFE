import React from 'react';
import axios from 'axios';

export default class BookingForm extends React.Component {

    userName = React.createRef();
    userPhone = React.createRef();
    userDescription = React.createRef();
    
    submitBooking = (event) => {
        event.preventDefault();

        const appointmentTime = this.props.location.appointmentTime;

        var bookingParameters = {
            contact: {
                name: this.userName.current.value,
                phone: this.userPhone.current.value
            },
            timeSlotID: appointmentTime.timeSlotID,
            date: appointmentTime.date,
            description: this.userDescription.current.value
        }

        var temp = {
            contact: {
                name: "test",
                phone: "07921212121"
            },
            timeSlotID: 3,
            date: "2020-10-01",
            description: "demo2dddd"
        }
          
        console.log(bookingParameters);
        console.log(temp);

        axios.post(
            'https://localhost:5001/api/v1/Book',
            bookingParameters,
            {
                headers:{
                    'Content-Type': 'application/json'
                }
            })            
            .then((res) => {
                console.log(res);
                // redirect to confirmation page
            })
            .catch((error) => {
                // TODO: handle errors
        })
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
        const appointmentTime = this.props.location.appointmentTime;

        const monthNames = [
            "January", "February", 
            "March", "April", 
            "May", "June",
            "July", "August", 
            "September", "October", 
            "November", "December"
        ];
  
        const month = appointmentTime.date.split('-')[1];
        const day = appointmentTime.date.split('-')[2];

        return (
            <div className="BookingPageContainer">
                <div className="wrapper">
                    <div className="AppointmentTime flexbox HeaderContainer">
                        <h2>YOUR APPOINTMENT</h2>
                        <h4 style={{paddingRight: "5px"}}>{day}{this.appendDateSuffix(day)} {monthNames[month]} at</h4>
                        <h4 style={{paddingLeft: "0"}}>{appointmentTime.timeSlotLabel}</h4>
                    </div>                
                    <div className="formContainer">
                        <form onSubmit={this.submitBooking}>
                            <div className="form__group field">
                                <input type="text" className="form__field" placeholder="Name" name="name" id='name' ref={this.userName} required />
                                <label htmlFor="name" className="form__label">Name</label>
                            </div>

                            <div className="form__group field">
                                <input type="tel" className="form__field" placeholder="Phone" name="phone" id='phone' ref={this.userPhone} required />
                                <label htmlFor="phone" className="form__label">Phone</label>
                            </div>

                            <div className="form__group field">
                                <input type="text" className="form__field" placeholder="Description" name="description" id='description' ref={this.userDescription} required />
                                <label htmlFor="description" className="form__label">Description</label>
                            </div>
                            <button className="button">Book</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}