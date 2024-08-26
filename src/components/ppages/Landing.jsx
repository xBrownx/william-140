import React, {forwardRef} from "react";
import * as Styled from "../Pages/01-Landing/Landing.styled";
import { ArrowButton } from "../Styled/Buttons/Buttons.styled";
import { Page } from "../templates";
import { BackgroundVideo } from "../molecules";
import video from '../../assets/vid/01-Landing.mp4'
import { LandingTitleAnimation } from "../organisms";

export const Landing = forwardRef(function ({id, scrollTo}, ref) {

    return (
        <Page
            pageRef={ref}
            $fullScreen
            style={{mixBlendMode: "multiply"}}
        >
            <Styled.Container id="container">
                <BackgroundVideo src={video}/>
                <LandingTitleAnimation $clone />
                <Styled.LandingButtonWrapper>
                    <ArrowButton hoverColour={'#DED9D0'} onClick={scrollTo}/>
                </Styled.LandingButtonWrapper>
            </Styled.Container>
        </Page>
    );
});

