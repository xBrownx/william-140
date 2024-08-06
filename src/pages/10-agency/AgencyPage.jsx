import React from 'react';

import {useHomeAnim} from "../../hooks/HomeAnim";
import {ScrollConst} from "../../util/PageRefs";

import imgLobby from '../../assets/agency/1-Lobby.png'
import {ReactComponent as JamPap} from "../../assets/agency/1-James-Pappas.svg";
import {ReactComponent as HamSut} from "../../assets/agency/2-Hamish-Sutherland.svg";
import {ReactComponent as GeoMur} from "../../assets/agency/3-Georgina-Murray.svg";
import {ReactComponent as MicDar} from "../../assets/agency/4-Michael-Darvell.svg";
import {ReactComponent as ShaBur} from "../../assets/agency/5-Shane-Burns.svg";
import {ReactComponent as OpenIcon} from "../../assets/agency/Open-Icon.svg";
import {HeadingAnim} from "../../hooks/TextAnim";


function AgencyPage(props) {

    const anim = useHomeAnim(props.mainRef, ScrollConst.agencyHead, ScrollConst.homeBody);

    return (
        <section ref={props.pageRef.agencyRef} className="agency">
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
                                <HeadingAnim word={"Agencies"}/>
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
        </section>
    );
}

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

export default AgencyPage;