import React, {forwardRef, lazy, Suspense} from "react";
import {StyledSection} from "../components/styles/SectionContainer.styled";
import {SplitScreenContainer} from "../components/ui/SplitScreenContainer";
import {HomeLeftComponent, HomeRightComponent} from "../components/2-Home.ui";

export const Home = forwardRef(function ({id}, ref) {

    return (

        <StyledSection
            id={id}
            ref={ref}
            $secondary
        >
            <SplitScreenContainer id={id}>
                <HomeLeftComponent/>
                <HomeRightComponent/>
            </SplitScreenContainer>
        </StyledSection>

    );
});
