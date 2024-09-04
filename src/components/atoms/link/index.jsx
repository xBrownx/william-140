import {StyledLink} from "./styles";
import { memo } from "react";

export const Link = memo(function Link(props) {
    return (
        <StyledLink {...props}>
            {props.children}
        </StyledLink>
    );
});

