import React, {useLayoutEffect, useRef} from 'react';

import SplitType from 'split-type'
import {motion} from "framer-motion";
import {PrimaryButton} from "../../components/Buttons";
import {HeadingAnim} from "../../hooks/TextAnim";
import {HeadingDisplay} from "../../components/styles/Typography.styled";
import {PageContainer, PageSection} from "../../components/styles/Containers.styled";
import {LandingAnimation, LandingBackground, LandingDisplay} from "../../components/styles/1-Landing.styled";


function Landing(props) {

    const displayHeading = [
        {title: "AN ICONIC", x: "-50%", y: "500%", delay: 0, justify: "end", align: "end", padding: 0},
        {title: "MELBOURNE" , x: "50%", y: "500%", delay: 0.1, justify: "start", align: "start", padding: "0 0 0 30%"},
        {title: "LANDMARK" , x: "-50%", y: "500%", delay: 0.15, justify: "end", align: "end", padding: 0},
    ];

    return (
        <PageSection
            as={motion.div}
            ref={props.pageRef.landingRef}
            secondary={true}
        >
            <PageContainer>
                <LandingBackground />

                {/*<div className="button-wrapper">*/}
                {/*    <PrimaryButton*/}
                {/*        onClick={() => {*/}
                {/*            props.pageRef.homeRef.current.scrollIntoView({behavior: "smooth"})*/}
                {/*        }}/>*/}
                {/*</div>*/}

                <LandingDisplay>
                    {
                        displayHeading.map((item, i) => {
                            return (
                                <LandingAnimation x={item.x} y={item.y}
                                    delay={item.delay}
                                    justify={item.justify}
                                    align={item.align}
                                    padding={item.padding}
                                >
                                    <HeadingDisplay justify={item.justify}>
                                        {item.title}
                                    </HeadingDisplay>
                                </LandingAnimation>);
                        })
                    }
                </LandingDisplay>
            </PageContainer>
        </PageSection>
    );
}


export default Landing;