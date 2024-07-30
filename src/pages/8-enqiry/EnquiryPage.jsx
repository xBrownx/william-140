import React from 'react';
import './EnquiryPage.css'
import {ParallaxLayer} from "@react-spring/parallax";

function EnquiryPage(props) {
    return (
        <ParallaxLayer
            className="enqiry-parallax"
            offset={props.offset}
            factor={props.factor || 1}
        >
            <div className="enquiry-page-wrapper">
                <div className="availability-page-container">
                    <div className="enquiry-page-title-wrapper">
                        <h1>Enquiry</h1>
                    </div>
                </div>
            </div>
        </ParallaxLayer>
    );
}

export default EnquiryPage;