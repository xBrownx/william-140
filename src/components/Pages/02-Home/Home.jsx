import React, {forwardRef} from "react";
import {StyledSection} from "../../Core/SectionContainer.styled";
import {SplitScreenContainer} from "../../Core/SplitScreenContainer";
import {HomeLeftComponent} from "./HomeLeftPanel";
import {HomeRightComponent} from "./HomeRightPanel";

export const Home = forwardRef(function (
    {
        id,
        minHeight
    },
    ref
) {

    return (
        <StyledSection
            id={id}
            ref={ref}
            minHeight={minHeight}
        >
            <SplitScreenContainer id={id}>
                <HomeLeftComponent/>
                <HomeRightComponent/>
            </SplitScreenContainer>
        </StyledSection>

    );
});
