import React, { useState } from 'react';
import './header.css';
import logo from '../../../assets/lg.png';
import drawer from '../../../assets/drawer.png'
import close from '../../../assets/close.png'
import facebook from '../../../assets/icons/facebook.svg';
import youtube from '../../../assets/icons/youtube.svg';
import insta from '../../../assets/icons/insta.svg';

const MobileHeader = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const handleLanguageChange = (e) => {
      setSelectedLanguage(e.target.value);
    };

    return (
        <div className="mobile-header">
            <div className="header-mobile">
                <div className='social'>
                    <a href="https://www.facebook.com/GaonConnection" target='_blank'> <img src={facebook} className="icon"></img></a>
                    <a href="https://www.instagram.com/gaonconnection" target='_blank'> <img src={insta} className="icon"></img></a>
                    <a href="https://www.youtube.com/channel/UCy4rsUzwespkNvjMI1coX8A" target='_blank'><img src={youtube} className="icon"></img></a>
                </div>
                <div className='logo_div'>
                <img src={logo} width={80} height={70} />
                    <span className='inner-logo'>सुनिए गाँव की आवाज़ बनिए गाँव की आवाज़</span>
                </div>

                <button className="menu-button" onClick={toggleDrawer}>
                    <img src={drawer} />
                </button>
            </div>
            {isDrawerOpen && (
                <div className="drawer">
                    <div className='close'>
                        <img src={logo} width={70} height={70} />
                        <button className="close-button" onClick={toggleDrawer}><img width={20} height={20} src={close}></img>
                        </button></div>
                    <ul className="drawer-menu">
                        <li><a href="#">Home</a></li>
                        <hr></hr>
                        <li><a href="#">Teacher Connection</a></li>
                        <hr></hr>
                        <li><a href="#">Kisaan Connection</a></li>
                        <hr></hr>
                        <li><a href="/survey-report">Surverys & Reports</a></li>
                        <hr></hr>
                        <li><a href="/change-maker">The Change makers Project</a></li>
                        <hr></hr>
                        <li><a href="#">Baat Pate Ki</a></li>
                        <hr></hr>
                        <li><a href="#">Latest News</a></li>
                    </ul>
                    <select className='language' value={selectedLanguage} onChange={handleLanguageChange}>
					<option value="English">English</option>
					<option value="Hindi">Hindi</option>
				</select>
                </div>
            )}
        </div>
    );
};

export default MobileHeader;
