import React, {forwardRef} from 'react';
import img from "../../assets/img/Availability-02.png";
import * as CONSTANTS from '../Pages/08-Availability/Availability.constants'
import {BackgroundContainer, PageTitle} from "../molecules";
import {Page} from "../templates/page";
import {AvailabilityOverlay, AvailabilityRating} from "../organisms";

export const Availability = forwardRef(function ({id,}, ref) {
    return (
        <Page pageRef={ref}>
            <BackgroundContainer src={img}>
                <AvailabilityOverlay />
                <PageTitle $variant padding={{top: 47, left: 64}}>
                    {CONSTANTS.subHeadingText}
                    {CONSTANTS.headingText}
                    {CONSTANTS.paragraphText}
                </PageTitle>
                <AvailabilityRating />
            </BackgroundContainer>
        </Page>
    );
});






