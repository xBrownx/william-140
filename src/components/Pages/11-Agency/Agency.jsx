import React, {forwardRef} from 'react';
import {ReactComponent as OpenIcon} from "../../../assets/icons/Open-Icon.svg";
import * as CONSTANTS from './Agency.constants'
import {StyledSection} from "../../Core/SectionContainer.styled";
import imgLobby from '../../../assets/img/1-Lobby.png';
import {FullPageMin, Padding} from "../../Core/PageContainer.styled";
import {SplitScreen} from "../07-Amenities/Amenities.styled";
import styled from "styled-components";
import {Agent} from "./AgencyAgent";

export const Agency = forwardRef(function (
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
            justify={'center'}
        >
            <SplitScreen id="split-screen">
                <LeftHand/>
                <RightHand/>
            </SplitScreen>

        </StyledSection>
    );
});

const LeftHand = () => {
    return (
        <img src={imgLobby} alt="Lobby"/>
    );
}

const RightHand = () => {
    return (
        <RightHandPane>
            <StyledHeading>
                {CONSTANTS.headingText}
            </StyledHeading>
            <ContentContainer>
                <StyledParagraph>
                    {CONSTANTS.paragraphText}
                </StyledParagraph>
                <SubHeading title={CONSTANTS.subHeadingOne}/>
                <StyledUl>
                    {CONSTANTS.knightFrankAgents.map((agent, i) => (
                        <Agent key={`${i}_kf_agent`} agent={agent}/>
                    ))}
                </StyledUl>
                <SubHeading title={CONSTANTS.subHeadingTwo}/>
                <StyledUl>
                    {CONSTANTS.colliersAgents.map((agent, i) => (
                        <Agent key={`${i}_cs_agent`} agent={agent}/>
                    ))}
                </StyledUl>
            </ContentContainer>
        </RightHandPane>
    );
}

const RightHandPane = styled.div`
    padding: 0 0 0 var(--width-48px);
`

const ContentContainer = styled.div`
    border-left: 1px solid #84936E;
    padding: 0 0 0 var(--width-32px);
`

const StyledHeading = styled.h1`
    font-family: 'TWKEverett-Light', serif;
    font-weight: 300;
    font-size: var(--font-size-64px);
    color: #fff;
    margin: 0;
    padding: 0;
`

const StyledParagraph = styled.p`
    font-size: var(--font-size-18px);
    font-family: var(--font-fmaily-secondary-light), serif;
    font-weight: 400;
    line-height: var(--line-height-18px);
    color: #fff;
    opacity: 0.7;
    margin: var(--height-32px) 0 0 0;
    padding: 0;
`

const SubheadingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    margin: 0 0 0 0;
`

const StyledSubheading = styled.h1`
    margin: var(--height-32px) 0 0 0;
    padding: var(--height-8px) 0;
    color: #5178E1;
    font-family: "SuisseIntl-Bold", serif;
    font-size: var(--font-size-20px);
`

const StyledUl = styled.ul`
    margin: var(--height-16px) 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: var(--height-8px);
    //margin: var(--height-32px) 0 0 0;
`

const SubHeading = ({title}) => {
    return (
        <SubheadingWrapper>
            <StyledSubheading>{title}</StyledSubheading>
            <OpenIcon/>
        </SubheadingWrapper>
    );
}


