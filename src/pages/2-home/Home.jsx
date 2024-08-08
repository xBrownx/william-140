import React, {lazy, Suspense} from "react";
import {PageContainerStyled} from "../../components/styles/PageContainer.styled";

// import {SplitScreen} from "../../components/ui/SplitScreen";
import {Content, HomeBackground} from "./2-Home.ui";
import {PageSection} from "../../components/styles/SectionContainer.styled";

const SplitScreen= lazy(() => import("../../components/ui/SplitScreen"));

function Home(props) {

    return (

        <PageSection
            ref={props.pageRef.home}
            $secondary
        >

            <HomeBackground/>
            <PageContainerStyled>
                <SplitScreen
                    left={() => {
                    }}
                    right={Content}>
                </SplitScreen>
            </PageContainerStyled>


        </PageSection>
    )
        ;
}

export default Home;
