import { StyledSubheading } from "./styles";
import { memo } from "react";

export const Subheading = memo(function Subheading(props) {
    return (
        <StyledSubheading {...props}>
            {props.children}
        </StyledSubheading>
    );
});
