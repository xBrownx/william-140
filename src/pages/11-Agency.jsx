import React, {forwardRef} from 'react';
import imgLobby from './10-agency/assets/1-Lobby.png'
import {ReactComponent as JamPap} from "./10-agency/assets/1-James-Pappas.svg";
import {ReactComponent as HamSut} from "./10-agency/assets/2-Hamish-Sutherland.svg";
import {ReactComponent as GeoMur} from "./10-agency/assets/3-Georgina-Murray.svg";
import {ReactComponent as MicDar} from "./10-agency/assets/4-Michael-Darvell.svg";
import {ReactComponent as ShaBur} from "./10-agency/assets/5-Shane-Burns.svg";
import {ReactComponent as OpenIcon} from "./10-agency/assets/Open-Icon.svg";

import {StyledSection} from "../components/styles/SectionContainer.styled";


export const Agency = forwardRef(function({id}, ref) {
    return (
        <StyledSection id={id}
            ref={ref}
            $secondary
        >
            <div className="page-container">
                <div className="content-container">
                    <div className="column-container">
                        <div className="img-wrapper">
                            <img src={imgLobby} alt={"img"}/>
                        </div>
                    </div>
                    <div className="column-container">
                        <div className="heading-container">
                            <div className="title">

                            </div>
                        </div>
                        <div className="content-wrapper">
                            <p>
                                If you'd like to inspect this property in person, please contact your<br/>
                                preferred agent for further info or to arrange a private inspection.
                            </p>
                            <div className="sub-heading">
                                <h1>KNIGHT FRANK</h1>
                                <OpenIcon />
                            </div>
                            <ul className="agent-list">

                                <Agent
                                    img={JamPap}
                                    agentName={"JAMES PAPPAS"}
                                    phone={"+61 419 319 367"}
                                    email={"james.pappas@au.knightfrank.com"}
                                />

                                <Agent
                                    img={HamSut}
                                    agentName={"HAMISH SUTHERLAND"}
                                    phone={"+61 439 033 612"}
                                    email={"hamish.sutherland@au.knightfrank.com"}
                                />

                            </ul>

                            <div className="sub-heading">
                                <h1>COLLIERS</h1>
                                <OpenIcon />
                            </div>

                            <ul className="agent-list">

                                <Agent
                                    img={GeoMur}
                                    agentName={"GEORGINA MURRAY"}
                                    phone={"+61 412 232 030"}
                                    email={"georgina.murray@colliers.com"}
                                />

                                <Agent
                                    img={MicDar}
                                    agentName={"MICHAEL DARVELL"}
                                    phone={"+61 401 033 303"}
                                    email={"michael.darvell@colliers.com"}
                                />

                                <Agent
                                    img={ShaBur}
                                    agentName={"SHANE BURNS"}
                                    phone={"+61 439 035 002"}
                                    email={"shane.burns@colliers.com"}
                                />

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </StyledSection>
    );
});

const Agent = (props) => {
    return (
        <li>
            <props.img/>
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
