import React, {forwardRef} from 'react';
import img from "../../../assets/img/10-History-Placeholder.png";


import {StyledSection} from "../../Core/SectionContainer.styled";
import {GlobalStyles} from "../../themes/GlobalStyles.css";
import {
    LocationContent,
    LocationParagraph,
    LocationParagraphWrapper,
    LocationTitle
} from "../05-Location/Location.styled";
import {HeadingOne, HeadingThree} from "../../Core/Typography.styled";
import * as CONSTANTS from "./History.constants";
import {FullPageMin} from "../../Core/PageContainer.styled";
import {HistoryVideo} from "./HistoryVideo";

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
                    <LocationContent>
                        <LocationTitle>
                            <HeadingThree>
                                {CONSTANTS.subHeadingText}
                            </HeadingThree>
                            <HeadingOne $secondary>
                                {CONSTANTS.headingText}
                            </HeadingOne>
                        </LocationTitle>
                        <LocationParagraphWrapper>
                            <LocationParagraph>
                                {CONSTANTS.paragraphText}
                            </LocationParagraph>
                        </LocationParagraphWrapper>
                    </LocationContent>
                    <HistoryVideo />
                </FullPageMin>
            </StyledSection>
        </>
    );
});


const HistoryHeading = () => {
    return (
        <>

        </>
    );
}
