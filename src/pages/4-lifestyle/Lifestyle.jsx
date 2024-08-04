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

    const anim = useHeadingAnim(
        props.mainRef,
        ScrollConst.lifeStyleHead,
        [300, 350, 350, 300]
    )

    return (
        <Page pageRef={props.pageRef} size={"page-160"}>

            <PrimaryTitle
                mainRef={props.mainRef}
                scrolls={ScrollConst.lifeStyleHead}
                subHeading={"LIFESTYLE"}
                headOne={"Located in the"}
                headTwo={"Heart of the City"}
            >
                <p>
                    The essence of Melbourne’s vibrant lifestyle,<br/>
                    offering a perfect blend of convenience, culture,<br/>
                    and connectivity.
                </p>
            </PrimaryTitle>

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