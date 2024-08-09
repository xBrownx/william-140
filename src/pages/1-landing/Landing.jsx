import {motion} from "framer-motion";
import {PageContainerStyled} from "../../components/styles/PageContainer.styled";

import {LandingTitle} from "./components/LandingTitle";
import {StyledSection} from "../../components/styles/SectionContainer.styled";
import {LandingBackground} from "./components/LandingVideo";
import {LandingButton} from "./components/LandingButton";

function Landing(props) {

    return (
        <StyledSection
            ref={props.pageRef.landing}
        >
            <PageContainerStyled>
                <LandingBackground />
                <LandingTitle />
                <LandingButton onClick={props.scrollTo}/>
            </PageContainerStyled>
        </StyledSection>
    );
}


export default Landing;