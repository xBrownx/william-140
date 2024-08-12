import {ContentWrapper, RightContainer, StyledH1, StyledP} from "./Home.styled";
import React from "react";
import * as CONSTANTS from './Home.constants'
import {HomeButton} from "../../Buttons/Buttons.styled";
export const HomeRightComponent = () => {

    return (
        <RightContainer>
            <ContentWrapper>
                <StyledH1>
                    {CONSTANTS.headingText}
                </StyledH1>
                <StyledP $secondary>
                    {CONSTANTS.paragraphText}
                </StyledP>
                <HomeButton>
                    {CONSTANTS.buttonText}
                </HomeButton>
            </ContentWrapper>
        </RightContainer>
    );
}