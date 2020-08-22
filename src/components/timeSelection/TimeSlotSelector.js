import React from 'react';
import axios from 'axios';
import SingleTimeSlot from './SingleTimeSlot';

export default class TimeSlotSelector extends React.Component {

    // From SingleDate button

    state = {
        timeSlotAvailability: []
    }

    // TODO: Get date = from props
    async componentDidMount() {
        const response = await axios.get(`http://localhost:8080/api/v1/GetTimeavailability/${this.props.location.timeSlotDate.date}`)        

        this.setState({
            timeSlotAvailability: response.data
        })

        console.log(this.state.timeSlotAvailability);
        // console.log(this.props.location.timeSlotDate.date);
    };   

    render(){
        const props = this.props;
        return (
            <div>
                <p>Time slot selector</p>
                {this.state.timeSlotAvailability.map(availability => <SingleTimeSlot key={availability.timeSlotID} {...availability}/>)}
            </div>
        )
    }
}