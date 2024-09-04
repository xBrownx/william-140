import {StyledContainer} from "./styles";
import { memo } from "react";

export const Container = memo(function Container(props) {
    return (
        <StyledContainer ref={props.pageRef} {...props}>
            {props.children}
        </StyledContainer>
    );
});