import React from 'react';
import axios from 'axios';

export default class BookingForm extends React.Component {

    

    userName = React.createRef();
    userPhone = React.createRef();
    userEmail = React.createRef();
    userDescription = React.createRef();


    // props to be passed in -
    // time slot ID
    // date
    
    // Call function to book the appointment

    componentDidMount(){
        console.log(this.props);
    }

    submitBooking = async (event) => {
        event.preventDefault();

        const appointmentTime = this.props.location.appointmentTime;
        console.log(this.userName.current.value);
        console.log(this.userPhone.current.value);
        console.log(this.userEmail.current.value);

        var bookingParameters = {
            contact: {
                id: 0,
                name: this.userName.current.value,
                phone: this.userPhone.current.value,
                email: this.userEmail.current.value
            },
            timeSlotID: appointmentTime.timeSlotID,
            date: appointmentTime.date,
            description: this.userDescription.current.value
        }

        console.log(bookingParameters);

        let res = await axios.post('http://localhost:8080/api/v1/Book', bookingParameters)
        
        console.log(res);

        // TODO: handle errors

    }


    render(){
        const appointmentTime = this.props.location.appointmentTime;
        return (
            <div>
                <p>{appointmentTime.date}</p>
                <p>{appointmentTime.timeSlotID}</p>
                <p>{appointmentTime.timeSlotLabel}</p>
                
                <form onSubmit={this.submitBooking}>
                    <input type="text" placeholder="Name" ref={this.userName} required></input>
                    <input type="tel" placeholder="Phone" ref={this.userPhone} required></input>
                    <input type="email" placeholder="Email" ref={this.userEmail} ></input>
                    <input type="text" placeholder="Description" ref={this.userDescription} ></input>

                    <button>Book</button>
                </form>

            </div>
        )
    }
}