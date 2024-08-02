import React from 'react';
import './DesignPage.css'
import img from "../../assets/Rectangle 21 (1).png";
import {ParallaxLayer} from "@react-spring/parallax";
import Page from "../../components/Page";

function DesignPage(props) {
    return (
        <Page pageRef={props.pageRef} size={"single-half-page"}>
            <div className="design-page-title-wrapper">
                <h2>DESIGN</h2>
                <h1>
                    A Dynamic<br/>
                    Ground-Level Hub
                </h1>
                <div className="design-page-content-wrapper">
                    <p>
                        The essence of Melbourne’s vibrant lifestyle,offering a<br/>
                        perfect blend of convenience, culture, and connectivity.
                    </p>

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