import React from 'react';

export default class SingleTimeSlot extends React.Component {
    
    componentDidMount(){
        console.log(this.props.available)
    }
    
    // TODO: available is coming through, disbale button if it is not available

    render(){
        const availability = this.props;
        return (
            <div>
                <div>{availability.timeSlotID}</div>
                <div>{availability.available}</div>
            </div>
        )
    }
}