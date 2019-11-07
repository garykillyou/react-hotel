import React from 'react';
import './Sidebar2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Sidebar2() {
    const ScrollToArea2 = () => {
        document.getElementById("Area1").scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div id="Sidebar2" className="Sidebar2Style">
            <div>
                <FontAwesomeIcon icon={['fas', 'home']}
                    style={{ fontSize: '50px' }}
                    className="mt-2" />
            </div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <div onClick={ScrollToArea2}>
                    <FontAwesomeIcon icon={['fas', 'long-arrow-alt-up']}
                        style={{ fontSize: '50px' }}
                        className="mb-2" />
                </div>
            </div>
        </div>
    );
}

export default Sidebar2;