import React, {forwardRef} from 'react';

import {StyledSection} from "../components/styles/SectionContainer.styled";
import {GlobalStyles} from "../themes/GlobalStyles.css";
import {DesignItems} from "../assets/06-DesignItems";
import {HeadingOne, HeadingThree} from "../components/styles/Typography.styled";
import {FullPageContainer, FullPageMin, Padding} from "../components/styles/PageContainer.styled";

export const Design = forwardRef(function ({id}, ref) {
    const designItems = DesignItems();
    return (
        <>
            <GlobalStyles/>
            <StyledSection id={id}
                           ref={ref}
                           bgColour={'#162425'}
            >
                <FullPageMin>
                    <Padding>
                        <HeadingThree>DESIGN</HeadingThree>
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
