import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ToolsNavbar.css'

function ToolsNavbar() {
    return (
        <div className="ToolsNavbarStyle">
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <FontAwesomeIcon icon={['fas', 'globe']} />
                <div className="mx-1">繁體</div>
                <FontAwesomeIcon icon={['fas', 'chevron-down']} />
            </div>
            <div className="vertical-divider"></div>
            <FontAwesomeIcon icon={['fab', 'facebook']} color="#1877f2" size="lg"/>
            <div className="vertical-divider"></div>
            <div>訂房</div>
        </div>
    );
}

export default ToolsNavbar;