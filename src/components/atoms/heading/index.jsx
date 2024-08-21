import {StyledHeading} from "./styles";

const Heading = props => {
    return <StyledHeading {...props}>{props.children}</StyledHeading>;
}

export default Heading;