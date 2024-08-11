import React, {forwardRef} from 'react';

import {StyledSection} from "../../SectionContainer.styled";
import {GlobalStyles} from "../../themes/GlobalStyles.css";
import {DesignItems} from "./06-DesignItems";
import {HeadingOne, HeadingThree} from "../../Typography.styled";
import {FullPageContainer, FullPageMin, Padding} from "../../PageContainer.styled";

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
                        <HeadingThree>
                            DESIGN
                        </HeadingThree>
                        <HeadingOne>
                            A memorable<br/>
                            arrival experience
                        </HeadingOne>
                    </Padding>
                </FullPageMin>
            </StyledSection>
        </>
    );
});
