import React, {forwardRef} from 'react';
import img from "../../../assets/img/08-Availability-02.png";
import * as CONSTANTS from './Availability.constants'
import * as Styled from './Availability.styled'
import {StyledSection} from "../../Styled/SectionContainer.styled";

import {StyledHeading, StyledSubheading} from "../../Styled";
import {StyledParagraph} from "../../PageTitles/Column/ColumnTitle.styled";

import {Modal} from "./Modal";
import {LevelButtons} from "./AvailabilityButtons";

export const Availability = forwardRef(function (
    {
        id,
        minHeight
    },
    ref) {
    const [open, setOpen] = React.useState(false);

    const [modalBody, setModalBody] = React.useState(null);

    return (
        <StyledSection
            id={id}
            ref={ref}
            minHeight={minHeight}
        >
            <Styled.StyledImg src={img} alt="availibiility"/>
            <Modal open={open}
                   onClose={() => setOpen(false)}
            >
                {modalBody}
            </Modal>

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
            <LevelButtons
                setModalBody={setModalBody}
                setOpen={setOpen}
            />
        </StyledSection>

    );
});






