import React from 'react';
import {ParallaxLayer} from "@react-spring/parallax";

function FullPageVideo(props) {
    return (
        <ParallaxLayer
            className="full-page-video-parallax"
            offset={props.offset}
            factor={props.factor}
            speed={props.speed}
            sticky={props.sticky}
            style={{
                background: `#D9D9D9`,
                zIndex: -1,
            }}
        >
            <div className="full-page-video" style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <h1 style={{fontWeight: 400}}>Full Screen Video</h1>
            </div>
        </ParallaxLayer>
    );
}

export default FullPageVideo;