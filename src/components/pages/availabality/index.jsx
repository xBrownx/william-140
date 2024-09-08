import React, { forwardRef, memo } from 'react';
import { availability as CONST } from "./constants";
import { BackgroundContainer, PageTitle } from "../../molecules";
import { AvailabilityOverlay, AvailabilityRating } from "../../organisms";
import { Page } from "../../templates";

const Availability = memo(
    forwardRef(
        function ({id,}, ref) {
            return (
                <Page pageRef={ref}>
                    <BackgroundContainer src={CONST.assets.bgImg.src}>
                        <AvailabilityOverlay
                            buttons={CONST.buttons}
                            assets={CONST.assets}
                        />
                        <PageTitle $variant $noPStyle padding={{top: 47, left: 64}}>
                            {CONST.subheadingTxt}
                            {CONST.headingTxt}
                            {CONST.paragraphTxt}
                        </PageTitle>
                        <AvailabilityRating assets={CONST.assets} />
                    </BackgroundContainer>
                </Page>
            );
        }
    )
);

export default Availability;





