import {StyledSection} from "../../Core/SectionContainer.styled";
import {LandingBackground} from "./LandingVideo";
import React, {forwardRef} from "react";
import * as Styled from "./Landing.styled";
import {ArrowButton} from "../../Buttons/Buttons.styled";
import {LandingTitle} from "./LandingTitle";


export const Landing = forwardRef(function ({id, scrollTo}, ref) {

    return (
        <StyledSection id={id} ref={ref}>
            <Styled.Container id="container">
                <LandingBackground/>
                <Styled.TitleContainer>
                    <LandingTitle />
                </Styled.TitleContainer>
                <Styled.LandingButtonWrapper>
                    <ArrowButton hoverColour={'#DED9D0'} onClick={scrollTo}/>
                </Styled.LandingButtonWrapper>
            </Styled.Container>
        </StyledSection>
    );
});

