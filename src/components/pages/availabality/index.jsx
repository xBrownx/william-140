import React, { forwardRef, memo } from 'react';
import { availability as CONST } from "./constants";
import { BackgroundContainer, PageTitle } from "../../molecules";
import { AvailabilityOverlay, AvailabilityRating } from "../../organisms";
import { Page } from "../../templates";
import ThirdSpace from "../../organisms/thirdSpace";
import { useMobile } from "../../../hooks/useMobile";
import AvailabilityMobile from "../../organisms/availabilityMobile";

const Availability = memo(
    forwardRef(
        function ({id,}, ref) {
            const isMobile = useMobile();
            return (
                <Page pageRef={ref} >
                    {isMobile && <PageContents /> }
                    <BackgroundContainer src={CONST.assets.bgImg.src} >
                        {!isMobile && <AvailabilityOverlay
                            buttons={CONST.buttons}
                            assets={CONST.assets}
                        />}
                        {!isMobile && <PageContents /> }
                        {isMobile && <AvailabilityMobile /> }
                    </BackgroundContainer >
                    <ThirdSpace />
                </Page >
            );
        }
    )
);

const PageContents = () => {
    const isMobile = useMobile();
    return (
        <>
            <PageTitle $variant $noPStyle padding={{top: 47, left: 64}} >
                {CONST.subheadingTxt}
                {isMobile ? CONST.headingTxtMobile : CONST.headingTxt}
                {CONST.paragraphTxt}
            </PageTitle >
            <AvailabilityRating assets={CONST.assets} />
        </>
    );

}

export default Availability;





