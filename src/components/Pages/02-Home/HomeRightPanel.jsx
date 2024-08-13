import {ContentWrapper, StyledH1, StyledP} from "./Home.styled";
import React from "react";
import * as CONSTANTS from './Home.constants'
import {HomeButton} from "../../Buttons/Buttons.styled";
import styled from "styled-components";
export const HomeRightComponent = ({onDiscoverClick}) => {

    return (
        <RightContainer>
            <ContentWrapper>
                <StyledH1>
                    {CONSTANTS.headingText}
                </StyledH1>
                <StyledP $secondary>
                    {CONSTANTS.paragraphText}
                </StyledP>
                <HomeButton onClick={onDiscoverClick}>
                    {CONSTANTS.buttonText}
                </HomeButton>
            </ContentWrapper>
        </RightContainer>
    );
}

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 8.889vh 7.847vw 8.889vh 0;
    
    @media only screen and (max-width: 750px) {
        justify-content: start;
        padding: 32px 0 0 0;
    }
`