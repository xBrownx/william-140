import React from 'react';
import img from "../../assets/old/140-William.png";

import {Heading} from "../../hooks/TextAnim";

function History(props) {


    return (
        <section ref={props.pageRef.historyRef} className="history">
            <div className="page-container">
                <div className="heading-container">
                    <div className="sub-heading">
                        <Heading word={"HISTORY"}/>
                    </div>
                    <div className="heading-wrapper">
                        <div className="title-wrapper">
                            <div className="title line-1">
                                <Heading word={"The_Legacy_of"}/>
                            </div>

                            <div className="title line-2">
                                <Heading word={"140_William_Street"}/>
                            </div>
                        </div>
                        <div className="sub-heading-wrapper">
                            <p>
                                Designed by the renowned architectural firm Yuncken<br/>
                                Freeman, 140 William Street stands as a testament to<br/>
                                modernist architecture in Melbourne.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="content-container">
                    <div className="video-wrapper">
                        <div className="play-place-holder">
                            <p>play</p>
                        </div>
                        <img src={img} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default History;