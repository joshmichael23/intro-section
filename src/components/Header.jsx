import snaplogo from './images/logo.svg';
import React, { useEffect, useState } from "react";
import DesktopFeatures from './DesktopFeatures';
import DesktopCompany from './DesktopCompany';

const Header = props => {

    const [showFeatures, setShowFeatures] = useState(false);
    const [showCompany, setShowCompany] = useState(false);

    return (
        
        <div className="header">
            <img src={snaplogo}></img>
            <div className="menuDesktop">
            
                <a onClick={() => setShowFeatures(currentShow => !currentShow) }>Features <button className={showFeatures? 'dropdown close' :'dropdown open' }></button>
                { showFeatures ? <DesktopFeatures></DesktopFeatures> : null }
                
                
                
                </a>

                <a onClick={() => setShowCompany(currentShow => !currentShow)}>Company <button className={showCompany? 'dropdown close' :'dropdown open' }></button>

                { showCompany ? <DesktopCompany></DesktopCompany> : null }
                
                </a>
                <a className='header-careers'>Careers</a>
                <a className='header-about'>About</a>
           
           </div>


            <button className="menuMobile" onClick={() => props.setValue(setValue => !setValue)}><i className='fa fa-bars menu fa-2xl'></i></button>
        </div>
    
    
    );
}

export default Header;