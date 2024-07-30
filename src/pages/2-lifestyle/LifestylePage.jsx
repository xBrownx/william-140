import React from 'react';
import './LifestylePage.css'
import img from '../../assets/Frame 69.png'
import CarouselPage from "../../components/Carousel";
import {ParallaxLayer} from "@react-spring/parallax";

function LifestylePage(props) {
    return (
        <ParallaxLayer
            className="lifestyle-page-parallax"
            offset={props.offset}
            factor={props.factor}
            speed={props.speed}
            style={{
                background: `var(--primary-bg-colour)`,
            }}>
            <div className="lifestyle-page-wrapper">
                <div className="lifestyle-page-container">
                    <div className="lifestyle-page-title-wrapper">
                        <h2>LIFESTYLE</h2>
                        <h1>
                            Located in the<br/>
                            Heart of the City
                        </h1>
                        <div className="lifestyle-page-content-wrapper">
                            <p>
                                The essence of Melbourne’s vibrant lifestyle,<br/>
                                offering a perfect blend of convenience, culture,<br/>
                                and connectivity.
                            </p>
                            <div className="lifestyle-page-content-padding"/>
                        </div>

                    </div>
                    <div className="lifestyle-page-img-wrapper">
                        <img
                            src={img}
                            alt={"Lifestyle"}
                        />
                    </div>
                </div>
            </div>
        </ParallaxLayer>
    );
}

export default LifestylePage;