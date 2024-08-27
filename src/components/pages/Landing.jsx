import React, { forwardRef, lazy, Suspense, useEffect, useState } from "react";
import { landing as CONST } from '../../constants';
import { ArrowButton } from '../atoms';
import { BackgroundVideo, Container } from "../molecules";
import { LandingTitleAnimation } from "../organisms";
import { Page } from "../templates";
import { wait } from "@testing-library/user-event/dist/utils";

const module = () => import('../../assets/_landing')


export const Landing = forwardRef(function ({ id, scrollTo }, ref) {

    // const [loading, setLoading] = useState(true);
    //
    // wait(3000).then(() => module().then(() => setLoading(false)));

    return (
        // <>{loading ? <></> :
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
        // }</>
    )
});