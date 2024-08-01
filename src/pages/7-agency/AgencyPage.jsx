import React from 'react';
import './AgencyPage.css'
import {ParallaxLayer} from "@react-spring/parallax";
import agent from '../../assets/Rectangle 6.png'

function AgencyPage(props) {
    return (
        <ParallaxLayer
            className="agency-page-parallax"
            offset={props.offset}
            factor={props.factor || 1}
        >
            <div className="agency-page-wrapper">
                <div className="agency-page-container">
                    <div className="agency-page-title-wrapper">
                        <h1>Leasing Agency</h1>
                    </div>
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
            </div>
        </ParallaxLayer>
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