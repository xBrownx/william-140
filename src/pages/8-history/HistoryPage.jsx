import React from 'react';
import './HistoryPage.css'
import img from "../../assets/old/140-William.png";
import {ParallaxLayer} from "@react-spring/parallax";
import Page from "../../components/Page";
import {PrimaryTitleVariant} from "../../components/TitleVariants";
import {ScrollConst} from "../../util/PageRefs";
import {motion} from "framer-motion";
import {usePrimaryTitleAnim} from "../../hooks/Anim";

function HistoryPage(props) {

    const anim = usePrimaryTitleAnim(
        props.mainRef,
        ScrollConst.historyHead,
        [300, 350, 350, 300]
    )

    return (
        <Page pageRef={props.pageRef} size={"page-120"}>

            <PrimaryTitleVariant
                mainRef={props.mainRef}
                scrolls={ScrollConst.historyHead}
                subHeading={"HISTORY"}
                heading={"Built in 1972"}
            >
                <p>
                    Designed by the renowned architectural firm Yuncken<br/>
                    Freeman, 140 William Street stands as a testament to<br/>
                    modernist architecture in Melbourne.
                </p>
            </PrimaryTitleVariant>

            <motion.div
                className="history-img-container"
                style={{
                    scale: anim.bodyScale,
                    opacity: anim.bodyFade,
                }}
            >
                <img
                    src={img}
                    alt={"History"}
                />
            </motion.div>
        </Page>
    );
}

export default HistoryPage;