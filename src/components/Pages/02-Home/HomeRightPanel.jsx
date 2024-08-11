import {ContentWrapper, RightContainer, StyledButton, StyledH1, StyledP} from "./Home.styled";
import React from "react";

export const HomeRightComponent = () => {

    return (
        <RightContainer>
            <ContentWrapper>
                <StyledH1>SPACES FOR OUR TENANTS TO THRIVE</StyledH1>
                <StyledP $secondary>
                    Presenting a range of fully fitted<br/>
                    tenancies available to lease.<br/>
                    These opportunities, offer<br/>
                    stunning views and natural light<br/>
                    with access to the building’s first<br/>
                    class facilities and amenities.<br/>
                </StyledP>
                <StyledButton>
                    Discovery Availability
                </StyledButton>
            </ContentWrapper>
        </RightContainer>
    );
}