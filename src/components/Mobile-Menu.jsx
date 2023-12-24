
import close from './images/icon-close-menu.svg';
import React, { useEffect, useState } from "react";
 
const MobileMenu = props => {
    const [showFeaturesMobile, setShowFeaturesMobile] = useState(false);
    const [showCompanyMobile, setShowCompanyMobile] = useState(false);


    return (

        <div className={props.value == true? 'mobile-menu' : 'mobile-menu close'}>
           <div className="closeContainer">
            <button className="btnClose" onClick={() => props.setValue(setValue => !setValue)}><img src={close}></img></button>
           </div>
           <div className="menuOptions">
            <ul>
                <li>Features 
                    <button onClick={()=>setShowFeaturesMobile(showFeaturesMobile => !showFeaturesMobile)} className={showFeaturesMobile==true? 'dropdown close': 'dropdown open'}></button>
                    
                
                </li>
                {showFeaturesMobile==true? 
                    <div className="mobileFeatures">
                        <ul>
                            <li className='todo'>Todo List</li>
                            <li className='calendar'>Calendar</li>
                            <li className='reminders'>Reminders</li>
                            <li className='planning'>Planning</li>
                        </ul>
                    </div>
                    
                    : null}


                <li>Company 
                    <button onClick={()=>setShowCompanyMobile(showCompanyMobile => !showCompanyMobile)} className={showCompanyMobile==true? 'dropdown close': 'dropdown open'}></button>
                    {showCompanyMobile==true? 
                        <div className="mobileCompany">
                            <ul className='company'>
                                <li>History</li>
                                <li>Our Team</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    : null}
                </li>
                <li>Careers</li>
                <li>About</li>
            </ul>
           </div>
           <div className='loginContainer'>
            <button className="loginBtn">Login</button>
            <button className="registerBtn">Register</button>
           </div>
        </div>
    );
}

export default MobileMenu;