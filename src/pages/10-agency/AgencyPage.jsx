import React from 'react';
import './AgencyPage.css'
import agent from '../../assets/old/Rectangle 6.png'
import Page from "../../components/Page";
import {SecondaryTitle} from "../../components/TitleVariants";
import {useHomeAnim} from "../../hooks/HomeAnim";
import {ScrollConst} from "../../util/PageRefs";

function AgencyPage(props) {

    const anim = useHomeAnim(props.mainRef, ScrollConst.agencyHead, ScrollConst.homeBody);

    return (
        <Page pageRef={props.pageRef} size={"page-100"} >

            <SecondaryTitle
                variant={" agency"}
                heading={"Leasing Agency"}
                anim={anim}
            />

            <div className="primary-content-container">
                <div className="agency-page-content-wrapper">
                    <h2>Agency Name</h2>
                    <div className="agency-page-content-container">
                        <div className="agency-page-agents-container">
                            <ul>

                                <Agent
                                    img={agent}
                                    agentName={"AGENT NAME"}
                                    phone={"+61 234 567 890"}
                                    email={"agent@agency.com.au"}
                                />

                                <Agent
                                    img={agent}
                                    agentName={"AGENT NAME"}
                                    phone={"+61 234 567 890"}
                                    email={"agent@agency.com.au"}
                                />

                                <Agent
                                    img={agent}
                                    agentName={"AGENT NAME"}
                                    phone={"+61 234 567 890"}
                                    email={"agent@agency.com.au"}
                                />

                                <Agent
                                    img={agent}
                                    agentName={"AGENT NAME"}
                                    phone={"+61 234 567 890"}
                                    email={"agent@agency.com.au"}
                                />

                            </ul>
                        </div>
                        <div className="agency-page-blank">

                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}

const Agent = (props) => {
    return (
        <li>
            <img src={props.img} alt={"dp"}/>
            <div className={"agent-details"}>
                <h3>{props.agentName}</h3>
                <p>
                    {props.phone}<br/>
                    {props.email}
                </p>
            </div>
        </li>
    );
}

export default AgencyPage;