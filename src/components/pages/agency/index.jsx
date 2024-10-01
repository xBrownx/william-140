import React, { forwardRef, memo } from 'react';
import { agency as CONST } from './constants'
import { Image } from '../../atoms'
import { Agent, ParallaxImg, SplitScreen } from '../../molecules'
import { Page } from "../../templates";
import styled from "styled-components";
import { Style as S } from '../../atoms'
import { useMobile } from "../../../hooks/useMobile";
import {
    ContentContainer, CustomImage, CustomImageWrapper,
    CustomSplitScreen,
    ImgWrapper,
    Pane,
    RightHandPane,
    StyledHeading, StyledParagraph,
    StyledSubheading, StyledUl,
    SubheadingWrapper
} from "./styles";


const heroImg = CONST.assets.hero;
const knightFrankAgency = CONST.agencies.knightFrank;
const colliersAgency = CONST.agencies.colliers;
const agentAssets = CONST.assets.agents;
const OpenIcon = CONST.assets.icons.open.src;

const Agency = memo(
    forwardRef(
        function ({ id }, ref) {
            const isMobile = useMobile();
            return (
                <Page
                    $fullScreen
                    $bgSecondary
                    paddingInlineBlock={{ inline: isMobile ? 0 : 160, block: isMobile ? 0 : 190 }}
                >
                    <CustomSplitScreen ref={ref}>
                        <Pane id={'left-pane'}>
                            <CustomImageWrapper {...heroImg}>
                                <CustomImage {...heroImg} />
                            </CustomImageWrapper>
                        </Pane>
                        <Pane id={'right-pane'}>
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
                        </Pane>
                    </CustomSplitScreen>

                </Page>
            );
        }
    )
);



const SubHeading = ({ title, link }) => {

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



export default Agency;




