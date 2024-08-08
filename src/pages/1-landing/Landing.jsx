import {motion} from "framer-motion";
import {PageContainerStyled} from "../../components/styles/PageContainer.styled";

import {LandingTitle} from "./components/LandingTitle";
import {PageSection} from "../../components/styles/SectionContainer.styled";
import {LandingBackground} from "./components/LandingVideo";
import {LandingButton} from "./components/LandingButton";

function Landing(props) {

    return (
        <PageSection
            as={motion.div}
            ref={props.pageRef.landing}
            $secondary={true}
        >
            <PageContainerStyled>
                <LandingBackground />
                <LandingTitle />
                <LandingButton onClick={props.scrollTo}/>
            </PageContainerStyled>
        </PageSection>
    );
}


export default Landing;