import React from 'react';
import './LifestylePage.css'
import '../Main.css'
import img from '../../assets/Frame 69.png'
import {ParallaxLayer} from "@react-spring/parallax";

function Lifestyle(props) {
    return (

        <>
            {/*<ParallaxLayer*/}
            {/*    sticky={{start: props.offset, end: props.offset}}*/}
            {/*    style={{background: `var(--primary-bg-colour)`}}/>*/}

            <ParallaxLayer
                className="lifestyle-page-parallax"
                offset={props.offset} speed={props.speed}
                style={{background: `var(--primary-bg-colour)`}}
            >
                <div className="lifestyle primary-title-container">
                    <div className="lifestyle primary-title-wrapper">
                        <h2>LIFESTYLE</h2>
                        <h1>
                            Located in the<br/>
                            Heart of the City
                        </h1>
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                className="lifestyle-page-parallax"
                offset={props.offset} speed={props.speed}
            >
                <div className="lifestyle primary-content-container">
                    <div className="lifestyle primary-content-wrapper">
                        <p>
                            The essence of Melbourne’s vibrant lifestyle,<br/>
                            offering a perfect blend of convenience, culture,<br/>
                            and connectivity.
                        </p>
                        <div className="lifestyle-content-padding"/>
                    </div>
                </div>

                {/*<div className="lifestyle-img-wrapper">*/}
                {/*    <img*/}
                {/*        src={img}*/}
                {/*        alt={"Lifestyle"}*/}
                {/*    />*/}
                {/*</div>*/}

            </ParallaxLayer>
        </>
    );
}

export default Lifestyle;