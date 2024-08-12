import React from "react";

import {TitleContainer, TitleLine} from "./Landing.styled";
import {Heading138px, HeadingDisplay} from "../../Core/Typography.styled";
import {LandingAnimation} from "./LandingAnimation";
import {displayHeading} from "./Landing.constants";


export const LandingTitle = () => {

    return (
        <TitleContainer>
            {
                displayHeading.map((item, i) => {
                    return (
                        <LandingAnimation
                            key={i}
                            x={item.x}
                            y={item.y}
                            delay={item.delay}
                            justify={item.justify}
                            align={item.align}
                        >
                            <TitleLine>
                                <Heading138px justify={item.justify}>
                                    {item.title}
                                </Heading138px>
                            </TitleLine>
                        </LandingAnimation>);
                })
            }
        </TitleContainer>
    );
}