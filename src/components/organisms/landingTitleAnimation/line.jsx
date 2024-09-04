import { memo } from "react";
import { LandingTitle } from "../../atoms";
import { TitleAnimation } from "./animation";

export const Line = memo(
    function TitleRow(props) {
        const item = props.item;
        return (
            <TitleAnimation
                x={item.x}
                y={item.y}
                delay={item.delay}
                justify={item.justify}
                align={item.align}
            >
                <LandingTitle justify={item.justify} {...props}>
                    {item.title}
                </LandingTitle>
            </TitleAnimation>
        );
    }
);