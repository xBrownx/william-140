import React, {forwardRef} from "react";
import styled, {css} from "styled-components";
import {media} from "./Media";

export const StyledSection = forwardRef(function (
    {
        id,
        bgColour,
        minHeight,
        children,
        justify
    }, ref
) {
    return (
        <PageSection
            ref={ref}
            $bgColour={bgColour}
            $minHeight={minHeight}
            $justify={justify}
        >
            {children}
        </PageSection>
    );
});

const PageSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    min-height: ${({$minHeight}) => $minHeight};
    height: 100%;
    justify-content: ${({$justify}) => $justify};

    background-color: var(${({$bgColour}) => $bgColour});

    ${props => props.$secondary && css`
        background-color: ${({theme}) => theme.colors.bg_secondary};
    `};

    ${media.md`
        min-height: 0vh;
    `};
`