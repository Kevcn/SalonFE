import React from 'react';

export default class Success extends React.Component {
    render(){
        return (
            <div>
                <div className="flexbox HeaderContainer">
                    <h2 style={{color: "#66ff66"}}>APPOINTMENT BOOKED!</h2> 
                </div>
                <span>Your appointment at</span>
                <h1>{this.props.date}</h1>
                <h1 style={{marginBottom: "100px"}}>{this.props.timeslot}</h1>
                <span>Any question please do not hesitate to contact us on 07551 953808</span>
                <span>Thank you, and we are looking forward to see you!</span>
            </div>
        )
    }
}
