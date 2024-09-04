import { StyledColumn } from './styles';
import { memo } from "react";

export const Column = memo(function Column(props) {
    return (
        <StyledColumn {...props}>
            {props.children}
        </StyledColumn>
    );
});