import React, {forwardRef} from "react";
import img from "../../../assets/img/07-Amenities-02-Flexible.png";
import {StyledSection} from "../../Core/SectionContainer.styled";
import {HomeButton} from "../../Buttons/Buttons.styled";
import {ParallaxImg} from "../../ParallaxComponents";
import * as Styles from "./Home.styled";
import * as CONSTANTS from './Home.constants'

export const Home = forwardRef(function (
    {
        id,
        bgColour,
        minHeight,
        onDiscoverClick
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
            <Styles.SplitScreen>
                <Styles.Pane id="left-pane">
                    <Styles.LeftContainer id="home-left">
                        <Styles.ImgWrapper>
                            <ParallaxImg src={img} alt={""}/>
                        </Styles.ImgWrapper>
                    </Styles.LeftContainer>
                </Styles.Pane>
                <Styles.Pane id="right-pane">
                    <Styles.RightContainer>
                        <Styles.ContentWrapper>
                            <Styles.StyledH1>
                                {CONSTANTS.headingText}
                            </Styles.StyledH1>
                            <Styles.StyledP>
                                {CONSTANTS.paragraphText}
                            </Styles.StyledP>
                            <HomeButton hoverColour={'#164A49'} onClick={onDiscoverClick}>
                                {CONSTANTS.buttonText}
                            </HomeButton>
                        </Styles.ContentWrapper>
                    </Styles.RightContainer>
                </Styles.Pane>
            </Styles.SplitScreen>
        </StyledSection>

    );
});
