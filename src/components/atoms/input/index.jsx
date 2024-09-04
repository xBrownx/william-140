import { StyledInput } from "./styles";
import { memo } from "react";

export const Input = memo( function Input(props ) {
    return (
        <StyledInput type="text"{...props}>
            {props.children}
        </StyledInput>
    );
});
