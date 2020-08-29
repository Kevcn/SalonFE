import React from 'react';
import headerIcon from '../../images/align-right-solid.svg';

export default class ProvidedServices extends React.Component {
    
    render(){
      return (
        <div className="ServiceContainer">
            <div className="flexbox HeaderContainer">
                <img src={headerIcon} className="headerIcon"></img>
                <p className="Header">SERVICES</p>
            </div>            
            <div className="ServiceDetails">

            <div className="ServiceSection">
                <div className="SectionHeader">
                    <span>GENTS</span>
                </div>                
                <ul className="list">
                    <li>Short <span>£20</span></li>
                    <li>Clipper <span>£15</span></li>
                    <li>Clipper + Scissors <span>£17</span></li>
                </ul>                
            </div>

            <div className="ServiceSection">
                <div className="SectionHeader">
                    <span>LADIES</span>
                </div>
                <ul className="list">
                    <li>Short <span>£22</span></li>
                    <li>Long <span>£25</span></li>
                    <li>Extra long <span>£28</span></li>
                </ul>
            </div>

            <div className="ServiceSection">
                <div className="SectionHeader">
                    <span>STRAIGHTENING</span>
                </div>
                <ul className="list">
                    <li>Short <span>£100</span></li>
                    <li>Long <span>£125</span></li>
                    <li>Extra long <span>£150</span></li>
                </ul>
            </div>

            <div className="ServiceSection">
                <div className="SectionHeader">
                    <span>PERM</span>
                </div>
                <ul className="list">
                    <li>Short <span>£35</span></li>
                    <li>Long <span>£45</span></li>
                    <li>Extra long <span>£55</span></li>
                </ul>
            </div>

            <div className="ServiceSection">
                <div className="SectionHeader">
                    <span>COLOURING</span>
                </div>
                <ul className="list">
                    <li>Short <span>£20</span></li>
                    <li>Long</li>
                    <li>Extra long</li>
                </ul>
            </div>

            <div className="ServiceSection">
                <div className="SectionHeader">
                    <span>HIGHLIGHT</span>
                </div>
                <ul className="list">
                    <li>Short</li>
                    <li>Long</li>
                    <li>Extra long</li>
                </ul>
            </div>

            <div className="ServiceSection">
                <div className="SectionHeader">
                    <span>TREATMENTS</span>
                </div>
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
  