import React, {forwardRef} from "react";
import {StyledSection} from "../../Core/SectionContainer.styled";
import {HomeLeftComponent} from "./HomeLeftPanel";
import {HomeRightComponent} from "./HomeRightPanel";
import {SplitScreen} from "./Home.splitScreen";

export const Home = forwardRef(function (
    {
        id,
        minHeight,
        onDiscoverClick
    },
    ref
) {

    return (
        <StyledSection
            id={id}
            ref={ref}
            minHeight={minHeight}
        >
            <SplitScreen id={id}>
                <HomeLeftComponent id="left-component"/>
                <HomeRightComponent id="right-component" onDiscoverClick={onDiscoverClick} />
            </SplitScreen>
        </StyledSection>

    );
});
