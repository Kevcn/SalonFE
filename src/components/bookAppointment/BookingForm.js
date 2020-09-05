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
        console.log(this.userDescription.current.value);

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
            "contact": {
              "name": "Terrence",
              "phone": "07928371212"
            },
            "timeSlotID": 8,
            "date": "2020-10-01",
            "description": "demo2dddd"
          }
          
        console.log(bookingParameters);
        console.log(temp);

        let res = await axios.post('https://localhost:5001/api/v1/Book', bookingParameters)
        
        console.log(res);

        // TODO: handle errors

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

                            <div class="form__group field">
                                <input type="text" class="form__field" placeholder="Name" name="name" id='name' ref={this.userName} required />
                                <label htmlFor="name" class="form__label">Name</label>
                            </div>

                            <div class="form__group field">
                                <input type="tel" class="form__field" placeholder="Phone" name="phone" id='phone' ref={this.userPhone} required />
                                <label htmlFor="phone" class="form__label">Phone</label>
                            </div>

                            <div class="form__group field">
                                <input type="text" class="form__field" placeholder="Description" name="description" id='description' ref={this.userDescription} required />
                                <label htmlFor="description" class="form__label">Description</label>
                            </div>

                            {/* <div className="form_control">
                                <input name="name" type="text" placeholder="Name" ref={this.userName} required></input>
                                <label for="name" className="form_label">Name</label>
                            </div>
                            <div className="form_control">
                                <input type="tel" placeholder="Phone" ref={this.userPhone} required></input>
                            </div>
                            <div className="form_control">
                                <input type="text" placeholder="Description" ref={this.userDescription} ></input>
                            </div> */}

                            <button className="button">Book</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}