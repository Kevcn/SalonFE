import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class SlotTaken extends React.Component {
    render(){
        return (
            <div>
                <div className="flexbox HeaderContainer">
                    <h2 style={{color: "#ff0000"}}>Time Not Available</h2> 
                </div>
                <span style={{marginBottom: "20px"}} >OPS! Timeslot has been taken, please pick a different time</span>
                <span style={{marginBottom: "50px"}}>or call us on 07551 953808 to book your appointment</span>

                <Link to={{ pathname: '/dateselector' }} className="button" >
                    Try Again
                </Link>
            </div>
        )
    }
}
