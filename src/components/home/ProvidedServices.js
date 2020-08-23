import React from 'react';

export default class ProvidedServices extends React.Component {
    
    render(){
      return (
        <div className="ServiceContainer">
          <p className="Header">Services</p>
          <div className="ServiceDetails">
            <div className="ServiceSection">
                <h5>Gents</h5>
                <ul>
                    <li>Short</li>
                    <li>Clipper</li>
                    <li>Clipper + Scissors</li>
                </ul>
            </div>

            <div className="ServiceSection">
                <h5>LADIES</h5>
                <ul>
                    <li>Short</li>
                    <li>Long</li>
                    <li>Extra long</li>
                </ul>
            </div>

          </div>
        </div>             
      );
    }
  }
  