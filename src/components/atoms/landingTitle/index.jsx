import {StyledHeading} from "./styles";
import { memo } from "react";

export const LandingTitle= memo(function LandingTitle(props) {
    return(
        <StyledHeading {...props}>
            {props.children}
        </StyledHeading>
    );
});