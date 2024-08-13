import {StyledSection} from "../../Core/SectionContainer.styled";
import {LandingBackground} from "./LandingVideo";
import {LandingButton} from "./LandingButton";
import {forwardRef} from "react";
import {LandingTitleVariant} from "./LandingTitleVariant";
import {Container} from "./Landing.styled";


export const Landing = forwardRef(function({id, scrollTo}, ref) {

    return (
        <StyledSection id={id} ref={ref}>
            <Container id="container">
                <LandingBackground />
                <LandingTitleVariant />
                <LandingButton onClick={scrollTo}/>
            </Container>
        </StyledSection>
    );
});

