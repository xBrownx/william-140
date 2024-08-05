import React from 'react';
import './DesignPage.css'
import img from "../../assets/Rectangle 21 (1).png";
import {ParallaxLayer} from "@react-spring/parallax";
import Page from "../../components/Page";
import {motion} from "framer-motion"
import {PrimaryTitle, PrimaryTitleVariant} from "../../components/TitleVariants";
import {primaryTitleHeadScroll, ScrollConst} from "../../util/PageRefs";
import {usePrimaryTitleAnim} from "../../hooks/Anim";

function DesignPage(props) {

    const pageOffset = primaryTitleHeadScroll(0.475)
    const anim = usePrimaryTitleAnim(
        props.mainRef,
        pageOffset,
        [300, 350, 350, 300]
    )

    return (

        <Page pageRef={props.pageRef} size={"page-150"}>
            <PrimaryTitle
                mainRef={props.mainRef}
                anim={anim}
                subHeading={"DESIGN"}
                headOne={"A Dynamic"}
                headTwo={"Ground-Level Hub"}
                // padding: "0px 64px 120px 36px"
            >
                <p>
                    The essence of Melbourne’s vibrant lifestyle,offering a<br/>
                    perfect blend of convenience, culture, and connectivity.
                </p>
            </PrimaryTitle>

            <motion.div
                className="design-page-img-wrapper"
                style={{
                    scale: anim.bodyScale,
                    opacity: anim.bodyFade,
                }}
            >
                <img
                    src={img}
                    alt={"Design"}
                />
            </motion.div>
        </Page>
    );
}

export default DesignPage;