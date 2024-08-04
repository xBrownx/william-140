import React from 'react';
// import './LifestylePage.css'
import img from '../../assets/Frame 69.png'
import Page from "../../components/Page";
import {useHomeAnim} from "../../hooks/HomeAnim";
import {motion} from "framer-motion"
import {useHeadingAnim, useOffsetAnim} from "../../hooks/Anim";
import {PrimaryTitle} from "../../components/TitleVariants";
import {ScrollConst} from "../../util/PageRefs";

function Lifestyle(props) {

    const headScrolls = [
        [0.200, 0.283, 0.293, 0.350],
        [0.210, 0.283, 0.293, 0.360],
        [0.215, 0.283, 0.293, 0.370],
        //
    ];

    const headAnim = useHeadingAnim(
        props.mainRef,
        ScrollConst.lifeStyleHead,
        [300, 350, 350]
    )

    const bodyScroll = [0.220, 0.3, 0.340, 0.410];

    const anim = useHomeAnim(
        props.mainRef,
        headScrolls[0],
        bodyScroll,
        300
    );

    return (
        <Page pageRef={props.pageRef} size={"page-150"}>

            <PrimaryTitle
                subHeading={"LIFESTYLE"}
                headOne={"Located in the"}
                headTwo={"Heart of the City"}
                anim={headAnim}
            />

            <div className="primary-content-container">
                <motion.div
                    className="primary-content-wrapper"
                    style={{
                        translateX: anim.bodyOffset,
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