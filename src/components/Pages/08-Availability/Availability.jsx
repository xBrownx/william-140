import React, {forwardRef} from 'react';
import '../Availability.css'
import {ReactComponent as Img} from "../../../assets/svg/Frame 5736.svg";
import {StyledSection} from "../../Core/SectionContainer.styled";

export const Availability = forwardRef(function(
    {
        id,
        minHeight
    },
    ref) {

    return (
        <StyledSection
            id={id}
            ref={ref}
            minHeight={minHeight}
        >
            <Img
                style={{
                    width: "100%",
                    height: "100%"
            }}/>
        </StyledSection>
    );
});
