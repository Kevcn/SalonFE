import React from 'react';
import moment from 'moment';
import DayBookingRecords from './DayBookingRecords';

export default class ViewBookings extends React.Component {
    
  state = {
    bookings: []
  }

  componentDidMount(){    
    this.getBookings()
    .then(data => {
      
      var group = { };
      data.forEach((item) => {
         var list = group[item.date];
      
         if(list){
             list.push(item);
         } else{
          group[item.date] = [item];
         }
      });

      var bookings = Object.keys(group).map((key) => [key, group[key]]);

      bookings.sort((a, b) => {
        return a[0] - b[0];
      })


      this.setState({bookings: bookings})
    });
  }

  getBookings = () => {
      const requestOptions = {
          method: 'GET',
          headers: this.authHeader()
      };

      var dateFrom = moment().format('yyyy-MM-DD');
      var dateTo = moment().add(7, 'd').format('yyyy-MM-DD');
  
      const query = `dateFrom=${dateFrom}&dateTo=${dateTo}`;

      return fetch(`https://localhost:5001/api/v1/GetByDate?${query}`, requestOptions).then(this.handleResponse);
  }

  authHeader = () => {
      // return authorization header with basic auth credentials
      let user = JSON.parse(localStorage.getItem('user'));

      if (user && user.authdata) {
          return { 'Authorization': 'Basic ' + user.authdata };
      } else {
          return {};
      }
  }

  logout = () => {
      // remove user from local storage to log user out
      localStorage.removeItem('user');
  }

  handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);        
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                this.logout();
                this.props.history.push({
                  pathname: "/login"
              });
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log(data);
        return data;
    });
}

    render(){
      return (
        <div className="ViewBookingPageContainer">
          <div className="flexbox HeaderContainer">
              <h2>BOOKINGS</h2> 
          </div>
          <div className="DayBookings flexbox">
            {this.state.bookings.map(book => <DayBookingRecords key={book.id} {...book}/>)}
          </div>
        </div>
      )
    }
}
