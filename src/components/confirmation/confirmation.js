import React, {useState} from 'react';

export default class Confirmation extends React.Component {    
    state = {
        selectedDate: new Date()
    }
   
    render(){
        return (
        <div className="ConfirmationPageContainer">
            <div className="flexbox HeaderContainer">
              <h2 style={{color: "#66ff66"}}>APPOINTMENT BOOKED!</h2> 
            </div>

            {/* 200 Successful */}

            <div>
                <span>Your appointment at 16th Sep 2020, 16:00</span>
                <span>Any question please do not hesitate to contact us on 07551 953808</span>
                <span>Thank you, and we are looking forward to see you!</span>
            </div>

            {/* 400 please try again */}

            <div>
                <span>OPS! Timeslot has been taken, please pick a different time</span>
            </div>

            {/* 404 Error */}

            <div>
                <span>We were unable to book the appointment, please try again or call us on 07551 953808</span>
            </div>
        </div>
        )
    }
}