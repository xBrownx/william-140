import React, {forwardRef} from "react";
import * as Styled from "../Pages/01-Landing/Landing.styled";
import {ArrowButton} from "../Styled/Buttons/Buttons.styled";
import {LandingTitle} from "../Pages/01-Landing/LandingTitle";
import {Page} from "../templates/page";
import {BackgroundVideo} from "../molecules";
import video from '../../assets/vid/01-Landing.mp4'

export const Landing = forwardRef(function ({id, scrollTo}, ref) {

    return (
        <Page $fullScreen>
            <Styled.Container id="container">
                <BackgroundVideo src={video}/>
                <Styled.TitleContainer>
                    <LandingTitle />
                </Styled.TitleContainer>
                <Styled.LandingButtonWrapper>
                    <ArrowButton hoverColour={'#DED9D0'} onClick={scrollTo}/>
                </Styled.LandingButtonWrapper>
            </Styled.Container>
        </Page>
    );
});

