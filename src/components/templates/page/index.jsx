import React, { memo } from "react";
import { StyledPage } from './styles'

export const Page = memo(
    function Page(props) {
        return (
            <StyledPage ref={props.pageRef} {...props}>
                {props.children}
            </StyledPage>
        );
    }
);
