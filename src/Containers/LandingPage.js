import React from 'react';
import { Link } from 'react-router-dom'
import landingPage from '../Assets/SVG/landingPage.svg';
import '../Assets/Styles/LandingPage.css';
import tabIcon from '../Assets/Images/tabIcon.png';
import upperShape from '../Assets/Images/upperShape.png';
import lowerShape from '../Assets/Images/lowerShape.png';
import vector from '../Assets/Images/vectorArt.png';

const LandingPage = () => {
    
    return (
        <div className="landing">
            <embed className="vector" src={landingPage}/>
            <h3 className="label">Your cloud storage <br /> safe and sound</h3>
          
            <Link to='/home'><img className="tab" src={tabIcon} /></Link>
            
           
        </div>
    )
}

export default LandingPage
