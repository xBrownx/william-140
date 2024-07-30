import React from 'react';
import './HomePage-1.css'

import {ReactComponent as DownArrow} from "../../assets/DownArrow.svg"
import {useEffect, useRef, useState} from "react";
import LogoAnimation from "../../components/LogoAnimation";
import {ParallaxLayer} from "@react-spring/parallax";

function HomePage1(props) {

    return (
        <ParallaxLayer
            className="home-page-1-parallax"
            offset={props.offset}
            factor={props.factor}
        >
            <div className="home-page-wrapper">
                <div className="home-page-logo-container">
                    <LogoAnimation/>
                </div>
                <div className="home-page-down-arrow-container">
                    <div className="home-page-down-arrow-wrapper"
                    >
                        <DownArrow
                            className="home-page-down-arrow link"
                            onClick={props.scrollTo}
                        />
                    </div>
                </div>
            </div>
        </ParallaxLayer>
    );
}

export default HomePage1;