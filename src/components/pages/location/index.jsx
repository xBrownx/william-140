import React, { forwardRef, memo } from 'react';
import { location as CONST } from './constants'
import { Column, PageTitle } from "../../molecules";
import { LocationCarousel } from "../../organisms";
import { Page } from "../../templates";
import { StyledColumn } from "./styles";

const Location = memo(
    forwardRef(
        function ({id}, ref) {
            return (
                <Page
                    pageRef={ref}
                    $yEnd
                >
                    <StyledColumn>
                        <PageTitle
                            $row
                            $displayEnd
                            paddingInlineBlock={{inline: 160}}
                        >
                            {CONST.subheadingTxt}
                            {CONST.headingTxt}
                            {CONST.paragraphTxt}
                        </PageTitle>
                        <LocationCarousel />
                    </StyledColumn>
                </Page>
            );
        }
    )
);

export default Location;
