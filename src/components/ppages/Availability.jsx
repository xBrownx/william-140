import React, {forwardRef} from 'react';
import img from "../../assets/img/08-Availability-02.png";
import * as CONSTANTS from '../Pages/08-Availability/Availability.constants'
import {BackgroundContainer, PageTitle} from "../molecules";
import {Page} from "../templates/page";
import {AvailabilityOverlay, AvailabilityRating} from "../organisms";

export const Availability = forwardRef(function (
    {
        id,
        minHeight
    },
    ref) {

    const [open, setOpen] = React.useState(false);
    const [modal, setModal] = React.useState(null);
    const [modalIdx, setModalIdx] = React.useState(0);

    const onButtonClick = (idx) => {
        setModal(CONSTANTS.floorItems[idx])
    }


    return (
        <Page minHeight={2072}>
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






