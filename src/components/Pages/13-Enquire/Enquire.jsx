import React, {forwardRef} from 'react';
import styled from "styled-components";
import {StyledSection} from "../../Core/SectionContainer.styled";
import {EnquireForm} from "./EnquireForm";
import {EnquireFooter} from "./Enquire.footer";
import * as CONSTANTS from "./Enquire.constants";
import {StyledHeading} from "../../Styled";

export const Enquire = forwardRef(function (
    {
        id,
        bgColour,
        minHeight
    },
    ref
) {
    return (
        <StyledSection
            id={id}
            ref={ref}
            bgColour={bgColour}
            minHeight={minHeight}
        >
            <Container id="container">
                <ContentWrapper>
                    <StyledHeading $secondary>
                        {CONSTANTS.headingText}
                    </StyledHeading>
                    <EnquireForm/>
                </ContentWrapper>
                <EnquireFooter/>
            </Container>
        </StyledSection>
    )
        ;
});

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100vw;
    height: 100vh;
    z-index: 2;
    padding: var(--height-140px);
    overflow: hidden;
    box-sizing: border-box;
    
    @media only screen and (max-width: 750px) {
        padding: 16px;
        h1 {
            text-align: center;
        }
    }
    
`

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: var(--width-32px);
`