import React, { forwardRef } from "react";
import { landing as CONST } from '../../constants';
import { ArrowButton } from '../atoms';
import { BackgroundVideo, Container } from "../molecules";
import { LandingTitleAnimation } from "../organisms";
import { Page } from "../templates";

const Landing = forwardRef(function ({ id, scrollTo }, ref) {

    return (
        <Page
            pageRef={ref}
            $fullScreen
        >
            <Container
                $fullScreen
                $centre
            >
                <BackgroundVideo src={CONST.assets.video.src} />
                <LandingTitleAnimation $clone />
                <Container
                    $absolute
                    position={{ right: 0, bottom: 0 }}
                    padding={{ right: 32, bottom: 41 }}
                >
                    <ArrowButton
                        size={64}
                        onClick={scrollTo}
                    />
                </Container>
            </Container>
        </Page>
    )
});

export default Landing;