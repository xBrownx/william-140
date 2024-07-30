import React, {useEffect} from 'react';
import './MainParallax.css'
import {ReactComponent as Title} from "../assets/Title.svg";
import {ParallaxLayer} from "@react-spring/parallax";

function NavBar(props) {

    function isInPage(page, start, end) {
        return page >= start && page < end;
    }

    return (
        <ParallaxLayer
            className="nav-parallax"
            offset={1}
            // speed={props.speed}
            sticky={props.sticky}
            style={{
                zIndex: 99,
                top: 0,
                height: "66px",
                display: "flex",
                width: "100%",
            }}
        >
            <div className="nav-bar-wrapper">
                <div className="nav-bar-container">
                    <div className="nav-bar-title-container">
                        <Title className="nav-bar-title" onClick={props.toTop}/>
                    </div>
                    <ul>
                        <li onClick={props.toTop}>Top</li>
                        <li className={isInPage(props.page, 3.4, 5.8) ? "link-active" : ""} onClick={props.toLifestyle}>Lifestyle</li>
                        <li className={isInPage(props.page, 5.8,7.5 ) ? "link-active" : ""} onClick={props.toDesign}>Design</li>
                        <li className={isInPage(props.page, 7.5,9 ) ? "link-active" : ""} onClick={props.toAmenities}>Amenities</li>
                        <li className={isInPage(props.page, 10.5, 12) ? "link-active" : ""} onClick={props.toAvailibility}>Availability</li>
                        <li onClick={props.toEnqire}>Enquire</li>
                    </ul>
                </div>
            </div>
         </ParallaxLayer>
    );
}

export default NavBar;