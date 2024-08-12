import React, {forwardRef} from 'react';

import {StyledSection} from "../../Core/SectionContainer.styled";
import {GlobalStyles} from "../../themes/GlobalStyles.css";
import {DesignItems} from "./Design.constants";
import {HeadingOne, HeadingThree} from "../../Core/Typography.styled";
import {FullPageContainer, FullPageMin, Padding} from "../../Core/PageContainer.styled";
import * as CONSTANTS from './Design.constants'
import {DesignContainer} from "./Design.styled";

export const Design = forwardRef(function ({id}, ref) {
    const designItems = DesignItems();
    return (
        <>
            <GlobalStyles/>
            <StyledSection
                id={id}
                ref={ref}
                bgColour={'#162425'}
            >
                <FullPageMin>
                    <Padding>
                        <DesignContainer>
                            <HeadingThree>
                                {CONSTANTS.subHeadingText}
                            </HeadingThree>
                            <HeadingOne>
                                {CONSTANTS.headingText}
                            </HeadingOne>
                        </DesignContainer>
                    </Padding>
                </FullPageMin>
            </StyledSection>
        </>
    );
});
