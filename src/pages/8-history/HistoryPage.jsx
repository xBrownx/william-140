import React from 'react';
import './HistoryPage.css'
import img from "../../assets/140-William.png";
import {ParallaxLayer} from "@react-spring/parallax";
import Page from "../../components/Page";
import {PrimaryTitleVariant} from "../../components/TitleVariants";

function HistoryPage(props) {
    return (
        <Page pageRef={props.pageRef} size={"page-150"}>

            <PrimaryTitleVariant
                subHeading={"HISTORY"}
                heading={"Built in 1972"}
            >
                    <p>
                        Designed by the renowned architectural firm Yuncken<br/>
                        Freeman, 140 William Street stands as a testament to<br/>
                        modernist architecture in Melbourne.
                    </p>
            </PrimaryTitleVariant>

            <div className="history-page-img-container">
            <img
                    src={img}
                    alt={"history"}
                />
            </div>
        </Page>
    );
}

export default HistoryPage;