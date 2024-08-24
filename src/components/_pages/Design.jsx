import React, {forwardRef} from 'react';
import {StyledSection} from "../Styled/SectionContainer.styled";
import * as CONSTANTS from '../Pages/06-Design/Design.constants'
import {DesignContainer} from "../Pages/06-Design/Design.styled";
import styled from "styled-components";
import {StyledHeading, StyledSubheading} from "../Styled";
import {Page} from "../templates/page";
import {PageTitle} from "../molecules";
import {DesignVideo} from "../organisms";

export const Design = forwardRef(function (
    {
        id,
        bgColour,
        minHeight
    },
    ref
) {
    const designItems = CONSTANTS.DesignItems();

    return (
        <Page $fullScreen $bgSecondary>
            <PageTitle
                $secondary
                paddingInlineBlock={{inline: 160}}
            >
                    {CONSTANTS.subHeadingText}
                    {CONSTANTS.headingText}
            </PageTitle>
            <DesignVideo />
        </Page>

    );
});
const Placeholder = styled.div`
    @media only screen and (max-width: 750px) {
        margin: 16px 0;
        width: 100%;
        height: 219px;
        background-color: red;
        padding: 0;
    }
`
