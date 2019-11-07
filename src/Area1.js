import React from 'react';
import { Carousel } from 'react-bootstrap'
import Sidebar1 from './Sidebar1'
import './Area1.css'
import img1 from './pic/avenue-4591121_1920.jpg'
import img2 from './pic/pier-569314_1920.jpg'
import img3 from './pic/vancouver-4587302_1920.jpg'

function Area1() {

    return (
        <div id="Area1" className="Area1Style">
            <Sidebar1></Sidebar1>
            <Carousel className="CarouselStyle" fade={true} indicators={false} controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={img1}
                        alt="first" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={img2}
                        alt="second" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={img3}
                        alt="third" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Area1;