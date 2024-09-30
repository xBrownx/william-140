import React, { forwardRef, memo } from "react";
import { landing as CONST } from './constants';
import { ArrowButton } from '../../atoms';
import { BackgroundVideo, Container } from "../../molecules";
import { LandingTitleAnimation } from "../../organisms";
import { Page } from "../../templates";
import { ArrowContainer, StyledContainer } from "./styles";

const Landing = memo(
    forwardRef(
        function ({id, scrollTo}, ref) {
            return (
                <Page
                    pageRef={ref}
                    $fullScreen
                >
                    <StyledContainer>
                        <BackgroundVideo
                            headings={CONST.heading}
                            src={CONST.assets.video.src}
                        />
                        <ArrowContainer>
                            <ArrowButton
                                onClick={scrollTo}
                            />
                        </ArrowContainer>
                    </StyledContainer>
                </Page>
            )
        }
    )
);

export default Landing;