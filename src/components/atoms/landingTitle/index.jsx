import {StyledHeading} from "./styles";

export const LandingTitle = props => {
    return(
        <StyledHeading {...props}>
            {props.children}
        </StyledHeading>
    );
}