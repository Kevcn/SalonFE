import React from 'react';
import headerIcon from '../../images/align-right-solid.svg';
import lineBreak from '../../images/line_break.png';

export default class OpeningHours extends React.Component {
    
    render(){
      return (
        <div className="OpeningHoursContainer">
          <div className="flexbox HeaderContainer">
              <span className="Header">OPENING HOURS</span>
          </div>

          <div className="flexbox">
            <div className="NormalHours">
              <h4>OPEN 7 DAYS A WEEK</h4>
              <span>11:00AM - 7:00PM</span>
            </div>
            <img src={lineBreak} />
            <div className="ChristmasHours">
              <h4>CHRISTMAS HOURS</h4>
              <div className="flexbox">
                <p>24th - 26th December <span>Closed</span></p>
                <p>27th - 30th December <span>Open</span></p>
                <p>31st December <span>Closed</span></p>
                <p>1st January <span>Closed</span></p>
              </div>
            </div>
            <img src={lineBreak} />
            <div className="ChineseNewYearHours">
              <h4>CHINESE NEW YEAR HOURS</h4>
              <span>Closed</span>
            </div>

          </div>
        </div>             
      );
    }
  }
  