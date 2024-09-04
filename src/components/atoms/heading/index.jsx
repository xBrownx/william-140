import { StyledHeading } from "./styles";
import { ParallaxText } from "../../molecules/parallaxText";
import { memo } from "react";

export const Heading = memo(function Heading(props) {
    return (
        <StyledHeading {...props}>
            <ParallaxText>
                {props.children}
            </ParallaxText>
        </StyledHeading>
    );
});
