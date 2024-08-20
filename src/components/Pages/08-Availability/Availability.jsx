import React, {forwardRef} from 'react';
import img from "../../../assets/img/08-Availability-02.png";
import * as CONSTANTS from './Availability.constants'
import * as Styled from './Availability.styled'
import {StyledSection} from "../../Styled/SectionContainer.styled";

import {StyledHeading, StyledSubheading} from "../../Styled";
import {StyledParagraph} from "../../PageTitles/Column/ColumnTitle.styled";

import {ModalWindow} from "./Modal";
import {LevelButtons} from "./AvailabilityButtons";
import {ModalGeneric} from "./Modal/Modal.generic";

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

            <Styled.TitleWrapper>
                <StyledSubheading $secondary>
                    {CONSTANTS.subHeadingText}
                </StyledSubheading>
                <StyledHeading $secondary>
                    {CONSTANTS.headingText}
                </StyledHeading>
                <Styled.ParagraphWrapper>
                    <StyledParagraph $secondary>
                        {CONSTANTS.paragraphText}
                    </StyledParagraph>
                </Styled.ParagraphWrapper>
            </Styled.TitleWrapper>
        </StyledSection>

    );
});






