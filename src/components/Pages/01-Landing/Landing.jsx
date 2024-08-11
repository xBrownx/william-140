import {FullPageContainer} from "../../PageContainer.styled";

import {LandingTitle} from "./LandingTitle";
import {StyledSection} from "../../SectionContainer.styled";
import {LandingBackground} from "./LandingVideo";
import {LandingButton} from "./LandingButton";
import {forwardRef} from "react";

export const Landing = forwardRef(function({id, scrollTo}, ref) {

    return (
        <StyledSection
            id={id}
            ref={ref}
        >
            <FullPageContainer >
                <LandingBackground />
                <LandingTitle />
                <LandingButton onClick={scrollTo}/>
            </FullPageContainer>
        </StyledSection>
    );
});
