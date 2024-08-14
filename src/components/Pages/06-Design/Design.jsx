import React, {forwardRef} from 'react';
import {StyledSection} from "../../Core/SectionContainer.styled";
import * as CONSTANTS from './Design.constants'
import {DesignContainer} from "./Design.styled";
import styled from "styled-components";
import {StyledHeading, StyledSubheading} from "../../Styled";

export const Design = forwardRef(function (
    {
        id,
        bgColour,
        minHeight
    },
    ref
) {
    const designItems = CONSTANTS.DesignItems();

    return (
        <StyledSection
            id={id}
            ref={ref}
            bgColour={bgColour}
            minHeight={minHeight}
        >
            <DesignContainer>
                <StyledSubheading>
                    {CONSTANTS.subHeadingText}
                </StyledSubheading>
                <StyledHeading $secondary>
                    {CONSTANTS.headingText}
                </StyledHeading>

            </DesignContainer>
            <Placeholder/>
        </StyledSection>

    );
});
const Placeholder = styled.div`
    @media only screen and (max-width: 750px) {
        margin: 16px 0;
        width: 100%;
        height: 219px;
        background-color: red;
        padding: 0;
    }
`
