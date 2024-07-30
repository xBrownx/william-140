import React, {useEffect, useRef, useState} from 'react';
import collage from "../../assets/Collage.png";
import './HomePage-2.css'
import {Parallax, ParallaxLayer, ParallaxProps} from '@react-spring/parallax'
import ElementObserver from "../../hooks/ElementObserver";

function HomePage2(props) {

    const [lastPage, setLastPage] = useState(0);
    const homeElements = document.querySelectorAll(".home-2-page");
    const observer = ElementObserver

    homeElements.forEach(el => observer.observe(el));

    return (
        <ParallaxLayer
            className="home-page-2-parallax"
            offset={props.offset}
            factor={props.factor}
            speed={props.speed}
            style={{ background: `var(--primary-bg-colour)`, }}
        >
            <div className="home-2-page home-2-page-wrapper">
                <div className="home-2-page-container">
                    <div className="home-2-page home-2-page-title-wrapper">
                        <h1>An Iconic Landmark<br/>in Melbourne</h1>
                    </div>
                    <div className="home-2-page home-2-page-content-wrapper">
                        <div className="home-2-page home-2-page-img-wrapper">
                            <div className="home-2-page home-2-page-img-container">
                                <img
                                    src={collage}
                                    alt={"Collage"}
                                />
                            </div>
                        </div>
                        <div className="home-2-page home-2-page-text-wrapper">
                            <div className="home-2-page home-2-page-text-container">
                                <h2>
                                    Spaces for our<br/>
                                    tenants to thrive
                                </h2>
                                <p>
                                    Presenting a range of fully fitted tenancies available to<br/>
                                    lease. These opportunities, offer stunning views and<br/>
                                    natural light with access to the building’s first class<br/>
                                    facilities and amenities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ParallaxLayer>
    );
}

export default HomePage2;