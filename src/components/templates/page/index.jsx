import { StyledPage } from './styles'
import React, { Suspense } from "react";

export const Page = props => {
    return (

            <StyledPage ref={props.pageRef} {...props}>
                {props.children}
            </StyledPage>
    );
}
