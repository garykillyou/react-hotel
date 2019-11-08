import React from 'react';
import Sidebar2 from './Sidebar2'
import './Area2.css'

function Area2() {

    return (
        <div id="Area2" className="Area2Style">
            <Sidebar2></Sidebar2>
            <div style={{ width: '100%', height: '500px' }}></div>
            <div style={{ width: '100%', height: '500px' }}></div>
            <div style={{ width: '100%', height: '500px' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.523003581741!2d121.46328341537816!3d24.982338546513702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346802c142b1aac3%3A0xade9a43e312045e4!2z5paw5YyX5biC56uL5riF5rC06auY5Lit!5e0!3m2!1szh-TW!2stw!4v1573108162952!5m2!1szh-TW!2stw" height="500" frameborder="0" style={{border:0, width: '80%', float: 'right' }} allowfullscreen=""></iframe>
            </div>
        </div>
    );
}

export default Area2;