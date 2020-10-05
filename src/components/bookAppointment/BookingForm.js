import React from 'react';
import axios from 'axios';

export default class BookingForm extends React.Component {

    state = {
        name: "",
        phone: "",
        description: "",
        date: "",
        month: "",
        day: "",
        timeSlotID: "",
        timeSlotLabel: ""
    }

    componentDidMount(){

        if (this.props.location.appointmentTime != undefined) {

            const date = this.props.location.appointmentTime.date;
            const timeSlot = this.props.location.appointmentTime.timeSlotID;
            const timeSlotLabel = this.props.location.appointmentTime.timeSlotLabel;

            localStorage.setItem('date', date);
            localStorage.setItem('timeSlot', timeSlot);
            localStorage.setItem('timeSlotLabel', timeSlotLabel);
        }

        this.setState({date: localStorage.getItem('date')})
        this.setState({timeSlotID: localStorage.getItem('timeSlot')})
        this.setState({timeSlotLabel: localStorage.getItem('timeSlotLabel')})
        this.setState({month: localStorage.getItem('month')})
        this.setState({day: localStorage.getItem('day')})
    }

    submitBooking = (event) => {
        event.preventDefault();

        const bookingParameters = {
            contact: {
                name: this.state.name,
                phone: this.state.phone
            },
            timeSlotID: parseInt(this.state.timeSlotID),
            date: this.state.date,
            description: this.state.description
        }
          
        console.log(bookingParameters);

        axios.post(
            'https://localhost:5001/api/v1/Book',
            bookingParameters,
            {
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                console.log(res.status);
                // redirect to confirmation page
                this.props.history.push({
                    pathname: "/confirmation",
                    data: res
                });
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

        return (
            <div className="BookingPageContainer">
                <div className="wrapper">
                    <div className="AppointmentTime flexbox HeaderContainer">
                        <h2>YOUR APPOINTMENT</h2>
                        <h4 style={{paddingRight: "5px"}}>{this.state.day}{this.appendDateSuffix(this.state.day)} {monthNames[this.state.month - 1]} at</h4>
                        <h4 style={{paddingLeft: "0"}}>{this.state.timeSlotLabel}</h4>
                    </div>
                    <div className="formContainer">
                        <form onSubmit={this.submitBooking}>
                            <div className="form__group field">
                                <input type="text" className="form__field" placeholder="Name" name="name" id='name' value={this.state.name} onChange={e => this.setState({ name: e.target.value})} required />
                                <label htmlFor="name" className="form__label">Name</label>
                            </div>

                            <div className="form__group field">
                                <input type="tel" className="form__field" placeholder="Phone" name="phone" id='phone' rvalue={this.state.phone} onChange={e => this.setState({ phone: e.target.value})} required />
                                <label htmlFor="phone" className="form__label">Phone</label>
                            </div>

                            <div className="form__group field">
                                <input type="text" className="form__field" placeholder="Description" name="description" id='description' value={this.state.description} onChange={e => this.setState({ description: e.target.value})} />
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