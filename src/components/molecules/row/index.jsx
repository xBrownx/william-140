import { StyledRow } from "./styles";
import { memo } from "react";

export const Row = memo(
    function Row(props) {
        return (
            <StyledRow {...props}>
                {props.children}
            </StyledRow>
        );
    }
);