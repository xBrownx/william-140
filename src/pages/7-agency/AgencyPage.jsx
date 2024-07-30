import React from 'react';
import './AgencyPage.css'
import {ParallaxLayer} from "@react-spring/parallax";

function AgencyPage(props) {
    return (
        <ParallaxLayer
            className="agency-page-parallax"
            offset={props.offset}
            factor={props.factor || 1}
        >
            <div className="agency-page-wrapper">
                <div className="agency-page-container">
                    <div className="agency-page-title-wrapper">
                        <h1>Leasing Agency</h1>
                        <div className="agency-page-content-wrapper">
                        </div>
                    </div>
                </div>
            </div>
        </ParallaxLayer>
    );
}

export default AgencyPage;