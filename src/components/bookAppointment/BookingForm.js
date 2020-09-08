import React from 'react';
import axios from 'axios';

export default class BookingForm extends React.Component {

    state = {
        name: "",
        phone: "",
        description: "",
        date: "",
        timeSlotID: ""
    }

    componentDidMount(){
        this.setState({date: this.formatDate(new Date(this.props.location.appointmentTime.date))})
        this.setState({timeSlotID: this.props.location.appointmentTime.timeSlotID })
    }

    formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    submitBooking = (event) => {
        event.preventDefault();

        const bookingParameters = {
            contact: {
                name: this.state.name,
                phone: this.state.phone
            },
            timeSlotID: this.state.timeSlotID,
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
  
        const month = appointmentTime.date.split('-')[1];
        const day = appointmentTime.date.split('-')[2];

        return (
            <div className="BookingPageContainer">
                <div className="wrapper">
                    <div className="AppointmentTime flexbox HeaderContainer">
                        <h2>YOUR APPOINTMENT</h2>
                        <h4 style={{paddingRight: "5px"}}>{day}{this.appendDateSuffix(day)} {monthNames[month - 1]} at</h4>
                        <h4 style={{paddingLeft: "0"}}>{appointmentTime.timeSlotLabel}</h4>
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