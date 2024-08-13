import React from "react";
import {Heading138px} from "../../Core/Typography.styled";
import {LandingAnimation} from "./LandingAnimation";
import {displayHeading} from "./Landing.constants";
import styled from "styled-components";
import {ParallaxText} from "../../ParallaxComponents";

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

export const TitleContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    bottom: 0;
    opacity: 1;
    min-width: 82.222vw;
    min-height: 51vh;

    gap: var(--height-32px);
    margin: 0 0 var(--height-32px) 0;

    @media only screen and (max-width: 750px) {
        gap: 0;
        margin: 0 0 160px 0;
        width: 100vw;
        min-width: 100vw;
        min-height: 0;
    }
`

export const TitleLine = styled.div`
    padding: 0 2.222vw;
    overflow: hidden;
`