import React, {forwardRef} from 'react';
import '../Availability.css'
import {ReactComponent as Img} from "../../../assets/svg/Frame 5736.svg";
import {StyledSection} from "../../SectionContainer.styled";

export const Availability = forwardRef(function({id}, ref) {

    // const anim = useHomeAnim(props.mainRef, ScrollConst.availabilityHead, ScrollConst.homeBody);

    return (
        <StyledSection
            id={id}
            ref={ref}
        >
            <Img
                style={{
                    width: "100%",
                    height: "100%"
            }}/>
        </StyledSection>
    );
});
