import React from 'react';
import './Sidebar1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Sidebar1() {
    const ScrollToArea2 = () => {
        document.getElementById("Area2").scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="Sidebar1Style">
            <div>
                <FontAwesomeIcon icon={['fas', 'home']}
                    style={{ fontSize: '50px' }}
                    className="mt-2" />
            </div>
            <div>
                <div onClick={ScrollToArea2}>
                    <FontAwesomeIcon icon={['fas', 'long-arrow-alt-down']}
                        style={{ fontSize: '50px' }}
                        className="mb-2" />
                </div>
            </div>
        </div>
    );
}

export default Sidebar1;