import { StyledButton } from "./styles";
import { memo } from "react";

export const Button = memo(function Button(props) {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    );
});
