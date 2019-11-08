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
            <div className="menu">
                <div>01. 立即訂房</div>
                <div>02. 民宿介紹</div>
                <div>03. 房間介紹</div>
                <div>04. 交通資訊</div>
                <div>05. 聯絡我們</div>
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