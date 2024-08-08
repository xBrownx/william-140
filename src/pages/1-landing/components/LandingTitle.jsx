import React from "react";

import {LandingDisplay} from "../styles/1-Landing.styled";
import {HeadingDisplay} from "../../../components/styles/Typography.styled";
import {LandingAnimation} from "./LandingAnimation";



export const LandingTitle = () => {

    const displayHeading = [
        {title: "AN ICONIC", x: "-50%", y: "500%", delay: 0, justify: "end", align: "end", padding: 0},
        {title: "MELBOURNE", x: "50%", y: "500%", delay: 0.1, justify: "start", align: "start", padding: "0 0 0 30%"},
        {title: "LANDMARK", x: "-50%", y: "500%", delay: 0.15, justify: "end", align: "end", padding: 0},
    ];

    return (
        <LandingDisplay>
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
                            padding={item.padding}
                        >
                            <HeadingDisplay justify={item.justify}>
                                {item.title}
                            </HeadingDisplay>
                        </LandingAnimation>);
                })
            }
        </LandingDisplay>
    );
}