import {motion} from "framer-motion";
import {FullPageContainer} from "../components/styles/PageContainer.styled";

import {LandingTitle} from "../components/1-LandingTitle";
import {StyledSection} from "../components/styles/SectionContainer.styled";
import {LandingBackground} from "../components/1-LandingVideo";
import {LandingButton} from "../components/1-LandingButton";
import {forwardRef} from "react";

export const Landing = forwardRef(function({id, scrollTo}, ref) {

    return (
        <StyledSection id={id} ref={ref}>
            <FullPageContainer >
                <LandingBackground />
                <LandingTitle />
                <LandingButton onClick={scrollTo}/>
            </FullPageContainer>
        </StyledSection>
    );
});
