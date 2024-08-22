import { StyledSubheading } from "./styles";

export const Subheading = props => {
    return <StyledSubheading {...props}>{props.children}</StyledSubheading>;
}
