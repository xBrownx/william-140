import React, {forwardRef} from 'react';

import {StyledSection} from "../components/styles/SectionContainer.styled";
import {GlobalStyles} from "../themes/GlobalStyles.css";

export const Design = forwardRef(function ({id}, ref) {

    return (
        <>
            <GlobalStyles/>
            <StyledSection id={id}
                           ref={ref}
                           bgColour={'#162425'}
            >
                <div className="page-container">
                    <div className="heading-container">
                        <div className="sub-heading">

                        </div>
                        <div className="title line-1">

                        </div>
                        <div className="title line-2">

                        </div>
                    </div>

                </div>
            </StyledSection>
        </>
    );
});
