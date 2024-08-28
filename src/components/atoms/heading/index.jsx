import { StyledHeading } from "./styles";
import { ParallaxText } from "../../molecules/parallaxText";

export const Heading = props => {
    return (
        <StyledHeading {...props}>
            <ParallaxText>
                {props.children}
            </ParallaxText>
        </StyledHeading>
    );
}
