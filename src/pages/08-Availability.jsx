import React, {forwardRef} from 'react';
import './8-availability/Availability.css'
import {ReactComponent as Img} from "./8-availability/assets/Frame 5736.svg";
import {StyledSection} from "../components/styles/SectionContainer.styled";

export const Availability = forwardRef(function({id}, ref) {

    // const anim = useHomeAnim(props.mainRef, ScrollConst.availabilityHead, ScrollConst.homeBody);

    return (
        <StyledSection id={id} ref={ref}>
            <Img style={{width: "100%", height: "100%"}}></Img>
        </StyledSection>
    );
});
