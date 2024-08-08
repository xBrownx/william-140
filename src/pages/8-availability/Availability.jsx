import React from 'react';
import './Availability.css'
import {ReactComponent as Img} from "./assets/Frame 5736.svg";
import {PageSection} from "../../components/styles/SectionContainer.styled";

function Availability(props) {

    // const anim = useHomeAnim(props.mainRef, ScrollConst.availabilityHead, ScrollConst.homeBody);

    return (
        <PageSection
            ref={props.pageRef.availability}
        >
            <Img style={{width: "100%", height: "100%"}}></Img>
        </PageSection>
    );
}

export default Availability;