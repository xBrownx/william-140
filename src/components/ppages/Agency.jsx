import React, {forwardRef} from 'react';
import {ReactComponent as OpenIcon} from "../../assets/icons/Open.svg";
import * as CONSTANTS from '../Pages/11-Agency/Agency.constants'
import imgLobby from '../../assets/img/Agency-Lobby.png';
import { SplitScreen } from '../molecules'
import styled from "styled-components";

import {Page} from "../templates/page";
import {Agent} from "../molecules/agent";

import { Style as S } from '../atoms'

export const Agency = forwardRef(function ({id}, ref) {
    return (
        <Page
            $fullScreen
            $bgSecondary
            paddingInlineBlock={{inline: 160, block: 190}}
        >
            <SplitScreen pageRef={ref}>
                <ImgWrapper>
                    <StyledImg src={imgLobby} alt="Lobby"/>
                    </ImgWrapper>
                <RightHand/>
            </SplitScreen>

        </Page>
    );
});

const ImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-right: 16px;
`

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

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

const SubHeading = ({title}) => {
    return (
        <SubheadingWrapper>
            <StyledSubheading>{title}</StyledSubheading>
            <OpenIcon/>
        </SubheadingWrapper>
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
    align-items: center;
    margin: var(--height-32px) 0 0 0;
    
    padding: var(--height-8px) 0;

    svg {
        padding: 0;
        margin: 0 0 0 10px;
        height: var(--font-size-18px);
        width: var(--font-size-18px);
    }
`

const StyledSubheading = styled.h1`
    margin: 0 0 0 0;
    padding: 0;
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
    ${S.gap.height(16)};
    //margin: var(--height-32px) 0 0 0;
`




