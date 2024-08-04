import React from 'react';
import './DesignPage.css'
import img from "../../assets/Rectangle 21 (1).png";
import {ParallaxLayer} from "@react-spring/parallax";
import Page from "../../components/Page";
import {motion} from "framer-motion"

function DesignPage(props) {
    return (
        <Page pageRef={props.pageRef} size={"page-150"}>
            <div className="primary-title-container">
                <div className="primary-title-wrapper">
                    <motion.h2
                        style={{
                            // translateX: offsetAnimSubHead,
                            // opacity: anim.headFade,
                        }}>
                        DESIGN
                    </motion.h2>

                    <motion.h1 style={{
                        // translateX: offsetAnimSubHead,
                        // opacity: anim.headFade,
                    }}>
                        A Dynamic<br/>
                    </motion.h1>

                    <motion.h1 style={{
                        // translateX: offsetAnimSubHead,
                        // opacity: anim.headFade,
                    }}>
                        Ground-Level Hub
                    </motion.h1>
                </div>
                <div className="primary-content-container">
                    <motion.div
                        className="primary-content-wrapper"
                        style={{
                            // translateX: offsetAnimSubTwo,
                            // opacity: anim.headFade,
                            padding: "0px 64px 120px 36px"
                        }}
                    >
                        <p>
                            The essence of Melbourne’s vibrant lifestyle,offering a<br/>
                            perfect blend of convenience, culture, and connectivity.
                        </p>
                    </motion.div>
                </div>

            </div>
            <div className="design-page-img-wrapper">
                <img
                    src={img}
                    alt={"design"}
                />
            </div>
        </Page>
);
}

export default DesignPage;