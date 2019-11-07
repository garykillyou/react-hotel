import React from 'react';
import Sidebar2 from './Sidebar2'
import './Area2.css'

function Area2() {

    return (
        <div id="Area2" className="Area2Style">
            <Sidebar2></Sidebar2>
            <div style={{ width: '100%', height: '500px' }}></div>
            <div style={{ width: '100%', height: '500px' }}></div>
            <div style={{ width: '100%', height: '500px' }}></div>
        </div>
    );
}

export default Area2;