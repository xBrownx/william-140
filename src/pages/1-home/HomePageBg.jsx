import React from 'react';
import landing from "../../assets/Landing-bg.png";
import {ParallaxLayer} from "@react-spring/parallax";
import './HomePage-1.css'
function HomePageBg(props) {
    return (
        <ParallaxLayer
            className="home-page-1-bg-parallax"
            offset={props.offset}
            factor={props.factor}
            sticky={props.sticky}
            style={{
                backgroundImage: `url(${landing})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                backgroundPosition: "50% 100%",
                minWidth: "939px",
                // backgroundPositionY: "100%",
                zIndex: -1,
            }}/>
    );
}

export default HomePageBg;