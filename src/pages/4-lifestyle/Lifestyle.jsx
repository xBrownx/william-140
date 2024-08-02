import React from 'react';
// import './LifestylePage.css'
import img from '../../assets/Frame 69.png'
import Page from "../../components/Page";
import {useHomeAnim} from "../../hooks/HomeAnim";
import {motion} from "framer-motion"
import {useOffsetAnim} from "../../hooks/LifestyleAnim";

function Lifestyle(props) {

    const headScrolls = [
        [0.200, 0.283, 0.293, 0.350],
        [0.210, 0.283, 0.293, 0.360],
        [0.215, 0.283, 0.293, 0.370],
        [0.220, 0.283, 0.303, 0.410]
    ];
    const bodyScroll = [0.220, 0.3, 0.340, 0.410];

    const anim = useHomeAnim(
        props.mainRef,
        headScrolls[0],
        bodyScroll,
        300
    );

    const offsetAnimSubHead = useOffsetAnim(
        props.mainRef,
        headScrolls[0],
        300
    );

    const offsetAnimHeadOne = useOffsetAnim(
        props.mainRef,
        headScrolls[1],
        -350
    );

    const offsetAnimHeadTwo = useOffsetAnim(
        props.mainRef,
        headScrolls[2],
        350
    );

    const offsetAnimSubTwo = useOffsetAnim(
        props.mainRef,
        headScrolls[3],
        -600
    );

    return (
        <Page pageRef={props.pageRef} size={"single-half-page"}>
            <div className="primary-title-container">
                <div className="primary-title-wrapper">
                    <motion.h2
                        style={{
                            translateX: offsetAnimSubHead,
                            opacity: anim.headFade,
                        }}
                    >
                        LIFESTYLE
                    </motion.h2>

                    <motion.h1
                        style={{
                            translateX: offsetAnimHeadOne,
                            opacity: anim.headFade,
                        }}>
                        Located in the
                    </motion.h1>

                    <motion.h1
                        style={{
                            translateX: offsetAnimHeadTwo,
                            opacity: anim.headFade,
                        }}>
                        Heart of the City
                    </motion.h1>
                </div>
            </div>

            <div className="primary-content-container">
                <motion.div
                    className="primary-content-wrapper"
                    style={{
                        translateX: offsetAnimSubTwo,
                        opacity: anim.headFade,
                    }}
                >
                    <p>
                        The essence of Melbourne’s vibrant lifestyle,<br/>
                        offering a perfect blend of convenience, culture,<br/>
                        and connectivity.
                    </p>

                </motion.div>
            </div>

            <motion.div
                className="lifestyle-img-wrapper"
                style={{
                    scale: anim.bodyScale,
                    opacity: anim.bodyFade,
                }}
            >
                <img
                    src={img}
                    alt={"Lifestyle"}
                />
            </motion.div>
        </Page>
    );
}

export default Lifestyle;