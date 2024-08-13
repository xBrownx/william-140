import React, {forwardRef} from 'react';
import {StyledSection} from "../../Core/SectionContainer.styled";
import {GlobalStyles} from "../../themes/GlobalStyles.css";
import * as CONSTANTS from "./History.constants";
import {FullPageMin} from "../../Core/PageContainer.styled";
import {HistoryVideo} from "./HistoryVideo";
import {TitleRow} from "../../Titles/TitleRow";

export const History = forwardRef(function (
    {
        id,
        bgColour,
        minHeight
    },
    ref
) {

    return (
        <StyledSection
            id={id}
            ref={ref}
            bgColour={bgColour}
            minHeight={minHeight}
            justify={"center"}
        >
            <TitleRow>
                {CONSTANTS.subHeadingText}
                {CONSTANTS.headingText}
                {CONSTANTS.paragraphText}
            </TitleRow>
            <HistoryVideo/>
        </StyledSection>

    );
});
