import { StyledSubheading } from "./styles";

const SubHeading = props => {
    return <StyledSubheading {...props}>{props.children}</StyledSubheading>;
}

export default SubHeading;