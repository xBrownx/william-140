import React from "react";

import {TitleContainer, TitleLine} from "./Landing.styled";
import {HeadingDisplay} from "../../Typography.styled";
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
                                <HeadingDisplay justify={item.justify}>
                                    {item.title}
                                </HeadingDisplay>
                            </TitleLine>
                        </LandingAnimation>);
                })
            }
        </TitleContainer>
    );
}