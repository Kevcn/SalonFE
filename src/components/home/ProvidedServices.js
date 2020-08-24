import React from 'react';

export default class ProvidedServices extends React.Component {
    
    render(){
      return (
        <div className="ServiceContainer">
          <p className="Header">Services</p>
          <div className="ServiceDetails">

            <div className="ServiceSection">
                <h4 className="SectionHeader">GENTS</h4>
                <ul className="list">
                    <li>Short</li>
                    <li>Clipper</li>
                    <li>Clipper + Scissors</li>
                </ul>
            </div>

            <div className="ServiceSection">
                <h4 className="SectionHeader">LADIES</h4>
                <ul className="list">
                    <li>Short</li>
                    <li>Long</li>
                    <li>Extra long</li>
                </ul>
            </div>

            <div className="ServiceSection">
                <h4 className="SectionHeader">STRAIGHTENING</h4>
                <ul className="list">
                    <li>Short</li>
                    <li>Long</li>
                    <li>Extra long</li>
                </ul>
            </div>

            <div className="ServiceSection">
                <h4 className="SectionHeader">PERM</h4>
                <ul className="list">
                    <li>Short</li>
                    <li>Long</li>
                    <li>Extra long</li>
                </ul>
            </div>

            <div className="ServiceSection">
                <h4 className="SectionHeader">COLOURING</h4>
                <ul className="list">
                    <li>Short</li>
                    <li>Long</li>
                    <li>Extra long</li>
                </ul>
            </div>

            <div className="ServiceSection">
                <h4 className="SectionHeader">HIGHLIGHT with foils/with cap</h4>
                <ul className="list">
                    <li>Short</li>
                    <li>Long</li>
                    <li>Extra long</li>
                </ul>
            </div>

            <div className="ServiceSection">
                <h4 className="SectionHeader">TREATMENTS</h4>
                <ul className="list">
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
  