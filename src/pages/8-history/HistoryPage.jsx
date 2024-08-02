import React from 'react';
import './HistoryPage.css'
import img from "../../assets/140-William.png";
import {ParallaxLayer} from "@react-spring/parallax";
import Page from "../../components/Page";

function HistoryPage(props) {
    return (
        <Page pageRef={props.pageRef} size={"single-half-page"}>
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
        </Page>
    );
}

export default HistoryPage;