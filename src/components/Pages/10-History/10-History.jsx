import React, {forwardRef} from 'react';
import img from "../../../assets/img/140-William.png";


import {StyledSection} from "../../SectionContainer.styled";

export const History = forwardRef(function({id}, ref) {


    return (
        <StyledSection
            id={id}
            ref={ref}
        >
            <div className="page-container">
                <div className="heading-container">
                    <div className="sub-heading">

                    </div>
                    <div className="heading-wrapper">
                        <div className="title-wrapper">
                            <div className="title line-1">

                            </div>

                            <div className="title line-2">

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
        </StyledSection>
    );
});
