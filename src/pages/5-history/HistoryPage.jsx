import React from 'react';
import './HistoryPage.css'
import img from "../../assets/140-William.png";
import {ParallaxLayer} from "@react-spring/parallax";

function HistoryPage(props) {
    return (
        <ParallaxLayer
            className="history-page-video-parallax"
            offset={props.offset}
            factor={props.factor || 1}
        >
            <div className="history-page-wrapper">
                <div className="history-page-container">
                    <div className="history-page-title-wrapper">
                        <div className="history-page-title">
                            <h2>HISTORY</h2>
                            <h1>Built in 1972</h1>
                        </div>
                        <div className="history-page-content">
                            <p>
                                Designed by the renowned architectural firm Yuncken<br/>
                                Freeman, 140 William Street stands as a testament to<br/>
                                modernist architecture in Melbourne.
                            </p>
                        </div>
                    </div>
                    <div className="history-page-img-container">
                        <img
                            src={img}
                            alt={"history"}
                        />
                    </div>
                </div>
            </div>
        </ParallaxLayer>
    );
}

export default HistoryPage;