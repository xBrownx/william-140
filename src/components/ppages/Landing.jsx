import {StyledSection} from "../Styled/SectionContainer.styled";
import {LandingBackground} from "../Pages/01-Landing/LandingVideo";
import React, {forwardRef} from "react";
import * as Styled from "../Pages/01-Landing/Landing.styled";
import {ArrowButton} from "../Styled/Buttons/Buttons.styled";
import {LandingTitle} from "../Pages/01-Landing/LandingTitle";


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

