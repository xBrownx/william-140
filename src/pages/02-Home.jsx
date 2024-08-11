import React, {forwardRef, lazy, Suspense} from "react";
import {StyledSection} from "../components/styles/SectionContainer.styled";
import {SplitScreenContainer} from "../components/SplitScreenContainer";
import {HomeLeftComponent, HomeRightComponent} from "../components/ui/02-Home.ui";

export const Home = forwardRef(function ({id}, ref) {

    return (

        <StyledSection
            id={id}
            ref={ref}

        >
            <SplitScreenContainer id={id}>
                <HomeLeftComponent/>
                <HomeRightComponent/>
            </SplitScreenContainer>
        </StyledSection>

    );
});
