import React from 'react';
import './Landing.css'
import {ReactComponent as DownArrow} from "../../assets/DownArrow.svg"
import {useEffect, useRef, useState} from "react";
import LogoAnimation from "../../components/LogoAnimation";
import {ParallaxLayer} from "@react-spring/parallax";

import landing from "../../assets/Landing-bg.png";

function Landing(props) {
    return (
        <div ref={props.reff} className="landing-container">
            <div className="landing-background"/>
            <div className="landing-wrapper">
                <div className="landing-logo-container">
                    <LogoAnimation/>
                </div>
                <div className="landing-down-arrow-container">
                    <div className="landing-down-arrow-wrapper">
                        <DownArrow
                            className="landing-down-arrow link"
                            onClick={props.scrollTo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;