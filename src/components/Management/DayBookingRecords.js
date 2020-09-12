import React from 'react';
import SingleBookingRecord from './SingleBookingRecord';

export default class DayBookingRecords extends React.Component {    

    render(){

        const date = this.props[0].split('T')[0];
        const month = date.split('-')[1];
        const day = date.split('-')[2];

        return (
        <div className="DayBookingContainer">
            <h3>{month} - {day}</h3>
            {this.props[1].map(records => <SingleBookingRecord key={records.id} {...records}/>)}
        </div>
        )
    }
}