import React from "react";

import {TitleContainer, TitleLine} from "../styles/01-Landing.styled";
import {HeadingDisplay} from "../styles/Typography.styled";
import {LandingAnimation} from "./01-LandingAnimation";


export const LandingTitle = () => {

    const displayHeading = [
        {title: "AN ICONIC", x: "-25%", y: "500%", delay: 0, justify: "end", align: "end"},
        {title: "MELBOURNE", x: "25%", y: "500%", delay: 0.1, justify: "start", align: "start"},
        {title: "LANDMARK", x: "-25%", y: "500%", delay: 0.15, justify: "end", align: "end"},
    ];

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