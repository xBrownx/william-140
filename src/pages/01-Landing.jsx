import {motion} from "framer-motion";
import {FullPageContainer} from "../components/styles/PageContainer.styled";

import {LandingTitle} from "../components/ui/01-LandingTitle";
import {StyledSection} from "../components/styles/SectionContainer.styled";
import {LandingBackground} from "../components/ui/01-LandingVideo";
import {LandingButton} from "../components/ui/01-LandingButton";
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
