import React, {forwardRef} from 'react';
import {StyledSection} from "../Styled/SectionContainer.styled";
import * as CONSTANTS from "../Pages/10-History/History.constants";
import {HistoryVideo} from "../Pages/10-History/HistoryVideo";
import {TitleRow} from "../PageTitles";


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
