import React from 'react';
import Straightening from '../../images/StraighteningHeader.png'
import Gents from '../../images/GentsHeader.png'
import Colouring from '../../images/ColouringHeader.png'
import Highlight from '../../images/HighlightHeader.png'
import Ladies from '../../images/LadiesHeader.png'
import Perm from '../../images/PermHeader.png'
import Treatments from '../../images/TreatmentsHeader.png'



export default class ProvidedServices extends React.Component {
    
    render(){
      return (
        <div className="ServiceContainer">
          <p className="Header">Services</p>
          <div className="ServiceDetails">

            <div className="ServiceSection">
                <div className="SectionHeader">
                    <img src={Gents} />
                </div>                
                <ul className="list">
                    <li>Short</li>
                    <li>Clipper</li>
                    <li>Clipper + Scissors</li>
                </ul>                
            </div>

            <div className="ServiceSection">
                <div className="SectionHeader">
                    <img src={Ladies} />
                </div>
                <ul className="list">
                    <li>Short</li>
                    <li>Long</li>
                    <li>Extra long</li>
                </ul>
            </div>

            <div className="ServiceSection">
                <div className="SectionHeader">
                    <img src={Straightening} />
                </div>
                <ul className="list">
                    <li>Short</li>
                    <li>Long</li>
                    <li>Extra long</li>
                </ul>
            </div>

            <div className="ServiceSection">
                <div className="SectionHeader">
                    <img src={Perm} />
                </div>
                <ul className="list">
                    <li>Short</li>
                    <li>Long</li>
                    <li>Extra long</li>
                </ul>
            </div>

            <div className="ServiceSection">
                <div className="SectionHeader">
                    <img src={Colouring} />
                </div>
                <ul className="list">
                    <li>Short</li>
                    <li>Long</li>
                    <li>Extra long</li>
                </ul>
            </div>

            <div className="ServiceSection">
                <div className="SectionHeader">
                    <img src={Highlight} />
                </div>
                <ul className="list">
                    <li>Short</li>
                    <li>Long</li>
                    <li>Extra long</li>
                </ul>
            </div>

            <div className="ServiceSection">
                <div className="SectionHeader">
                    <img src={Treatments} />
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
  