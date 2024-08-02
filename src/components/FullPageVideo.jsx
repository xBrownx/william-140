import React from 'react';
import {ParallaxLayer} from "@react-spring/parallax";

function FullPageVideo(props) {
    return (
        <>
            <ParallaxLayer
                className="full-page-video-parallax"
                offset={2}
                style={{
                    background: `#D9D9D9`,
                    zIndex: -1,
                }}
            />

            <ParallaxLayer
                sticky={props.sticky}
                style={{
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
        </>
    );
}

export default FullPageVideo;