import React, {lazy, Suspense} from "react";
import {PageSection} from "../../components/styles/SectionContainer.styled";
import {SplitScreenContainer} from "../../components/ui/SplitScreenContainer";
import {HomeLeftComponent, HomeRightComponent} from "./components/2-Home.ui";


function Home(props) {

    return (

        <PageSection
            ref={props.pageRef.home}
            $secondary
        >
            <SplitScreenContainer>
                <HomeLeftComponent />
                <HomeRightComponent />
            </SplitScreenContainer>

        </PageSection>
    )
        ;
}

export default Home;
