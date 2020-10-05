import React from 'react';
import axios from 'axios';
import SingleTimeSlot from './SingleTimeSlot';

export default class TimeSlotSelector extends React.Component {

    state = {
        timeSlotAvailability: [],
        month: "",
        day: ""
    }

    async componentDidMount() {
       
        if (this.props.location.date != undefined) {
            const year = this.props.location.date.getFullYear();
            const month = this.props.location.date.getMonth() + 1;
            const day = this.props.location.date.getDate();

            const date = [year, month, day].join('-');

            localStorage.setItem('date', date);
            localStorage.setItem('year', year);
            localStorage.setItem('month', month);
            localStorage.setItem('day', day);
        }

        const queryDate = localStorage.getItem('date');

        const response = await axios.get(`https://localhost:5001/api/v1/GetTimeavailability/${queryDate}`)        

        var responseData = response.data;
        for (let i = 0; i < responseData.length; i++) {
            responseData[i] = { ...responseData[i], date: queryDate}            
        }

        this.setState({
            timeSlotAvailability: responseData,
            month: localStorage.getItem('month'),
            day: localStorage.getItem('day')
        })
    };

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

        const monthNames = [
            "January", "February", 
            "March", "April", 
            "May", "June",
            "July", "August", 
            "September", "October", 
            "November", "December"
        ];

        return (
            <div className="TimeSlotPageContainer">
                <div className="wrapper" style={{maxWidth: "1000px"}}>
                    <div className="flexbox HeaderContainer" style={{marginBottom: "0"}}>
                        <h2 className="Header">PICK TIME</h2>
                        <h4>{this.state.day}{this.appendDateSuffix(this.state.day)}</h4>
                        <h4>{monthNames[this.state.month - 1]}</h4>
                    </div>
                    <div className="TimeslotContainer">
                        {this.state.timeSlotAvailability.map(availability => <SingleTimeSlot key={availability.timeSlotID} {...availability}/>)}
                    </div>   
                </div>                          
            </div>
        )
    }
}