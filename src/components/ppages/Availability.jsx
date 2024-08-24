import React, {forwardRef} from 'react';
import img from "../../assets/img/08-Availability-02.png";
import * as CONSTANTS from '../Pages/08-Availability/Availability.constants'
import * as Styled from '../Pages/08-Availability/Availability.styled'
import {StyledSection} from "../Styled/SectionContainer.styled";

import {StyledHeading, StyledSubheading} from "../Styled";
import {StyledParagraph} from "../PageTitles/Column/ColumnTitle.styled";

import {ModalWindow} from "../Pages/08-Availability/Modal";
import {LevelButtons} from "../Pages/08-Availability/AvailabilityButtons";
import {ModalGeneric} from "../Pages/08-Availability/Modal/Modal.generic";
import {PageTitle} from "../molecules";

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
        <StyledSection
            id={id}
            ref={ref}
            minHeight={minHeight}
        >
            <Styled.StyledImg src={img} alt="availibiility"/>

            <LevelButtons
                setModal={setModal}
                setOpen={setOpen}
            />

            <PageTitle $variant $padding64>
                {CONSTANTS.subHeadingText}
                {CONSTANTS.headingText}
                {CONSTANTS.paragraphText}
            </PageTitle>

</StyledSection>

)
    ;
});






