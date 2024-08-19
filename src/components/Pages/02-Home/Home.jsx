import React, {forwardRef} from "react";
import img from "../../../assets/img/02-Home-Final.jpg";
import {StyledSection} from "../../Core/SectionContainer.styled";
import {TextButtonVariant} from "../../Buttons/Buttons.styled";
import {ParallaxImg} from "../../ParallaxComponents";
import * as Styles from "./Home.styled";
import * as CONSTANTS from './Home.constants'
import {Home as Heading} from "../../Styled/Heading";
import {Home as Paragraph} from "../../Styled/Paragraph";
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
                            <Heading>
                                {CONSTANTS.headingText}
                            </Heading>
                            <Paragraph>
                                {CONSTANTS.paragraphText}
                            </Paragraph>
                            <TextButtonVariant
                                $secondary
                                onClick={onDiscoverClick}
                            >
                                {CONSTANTS.buttonText}
                            </TextButtonVariant>
                        </Styles.ContentWrapper>
                    </Styles.RightContainer>
                </Styles.Pane>
            </Styles.SplitScreen>
        </StyledSection>

    );
});
