import {StyledHeading} from "./styles";

export const Heading = props => {
    return <StyledHeading {...props}>{props.children}</StyledHeading>;
}
