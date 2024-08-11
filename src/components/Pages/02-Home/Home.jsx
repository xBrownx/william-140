import React, {forwardRef} from "react";
import {StyledSection} from "../../SectionContainer.styled";
import {SplitScreenContainer} from "../../SplitScreenContainer";
import {HomeLeftComponent} from "./HomeLeftPanel";
import {HomeRightComponent} from "./HomeRightPanel";

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
