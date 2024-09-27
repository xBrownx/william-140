import React, { forwardRef, memo } from 'react';
import { agency as CONST } from './constants'
import { Image } from '../../atoms'
import { Agent, SplitScreen } from '../../molecules'
import { Page } from "../../templates";
import styled from "styled-components";
import { Style as S } from '../../atoms'

const heroImg = CONST.assets.hero;
const knightFrankAgency = CONST.agencies.knightFrank;
const colliersAgency = CONST.agencies.colliers;
const agentAssets = CONST.assets.agents;
const OpenIcon = CONST.assets.icons.open.src;

const Agency = memo(
    forwardRef(
        function ({id}, ref) {

            return (
                <Page
                    $fullScreen
                    $bgSecondary
                    paddingInlineBlock={{inline: 160, block: 190}}
                >
                    <SplitScreen pageRef={ref}>
                        <ImgWrapper>
                            <Image {...heroImg} />
                        </ImgWrapper>
                        <RightHandPane>
                            <StyledHeading>
                                {CONST.headingTxt}
                            </StyledHeading>
                            <ContentContainer>
                                <StyledParagraph>
                                    {CONST.paragraphTxt}
                                </StyledParagraph>

                                <SubHeading
                                    title={colliersAgency.label}
                                    link={colliersAgency.link}
                                />
                                <StyledUl>
                                    {colliersAgency.agents.map((agent, i) => (
                                        <Agent
                                            key={agent.key}
                                            agent={agent}
                                            img={agentAssets[agent.key]}
                                        />
                                    ))}
                                </StyledUl>
                                <SubHeading
                                    title={knightFrankAgency.label}
                                    link={knightFrankAgency.link}
                                />
                                <StyledUl>
                                    {knightFrankAgency.agents.map((agent, i) => (
                                        <Agent
                                            key={agent.key}
                                            agent={agent}
                                            img={agentAssets[agent.key]}
                                        />
                                    ))}
                                </StyledUl>
                            </ContentContainer>
                        </RightHandPane>
                    </SplitScreen>

                </Page>
            );
        }
    )
);

const ImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-right: 16px;
`

const SubHeading = ({title, link}) => {

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <SubheadingWrapper onClick={() => openInNewTab(link)}>
            <StyledSubheading>{title}</StyledSubheading>
            <Image src={OpenIcon} />
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

    img {
        padding: 0;
        margin: 0 0 0 10px;
        height: var(--font-size-18px);
        width: var(--font-size-18px);
    }
    
    &:hover {
        cursor: pointer;
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

export default Agency;




