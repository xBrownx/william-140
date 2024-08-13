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
        minHeight
    },
    ref
) {

    return (
        <>
            <GlobalStyles/>
            <StyledSection
                id={id}
                ref={ref}
                minHeight={minHeight}
            >
                <FullPageMin>
                    <TitleRow>
                        {CONSTANTS.subHeadingText}
                        {CONSTANTS.headingText}
                        {CONSTANTS.paragraphText}
                    </TitleRow>
                    <HistoryVideo/>
                </FullPageMin>
            </StyledSection>
        </>
    );
});
