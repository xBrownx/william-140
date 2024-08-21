import React from "react";
import {LandingAnimation} from "./LandingAnimation";
import {Title} from "./Landing.styled";

import {displayHeading} from "./Landing.constants";


export const LandingTitle = () => {
    return (
        displayHeading.map((item, i) => {
            return (
                <TitleRow key={i} item={item}/>
            );
        })
    );
}

const TitleRow = ({key, item}) => {
    return (
        <LandingAnimation
            key={key}
            x={item.x}
            y={item.y}
            delay={item.delay}
            justify={item.justify}
            align={item.align}
        >
            <Title>
                {/*<Heading138px justify={item.justify}>*/}
                {/*    {item.title}*/}
                {/*</Heading138px>*/}
            </Title>
        </LandingAnimation>
    );
}



