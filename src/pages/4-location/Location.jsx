import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import {LocationContent} from "./4-Location.ui";
import {PageSection} from "../../components/styles/SectionContainer.styled";
import {PageContainerStyled} from "../../components/styles/PageContainer.styled";



function Location(props) {
    return (
        <PageSection
            ref={props.pageRef.location}
            $secondary
        >
            <PageContainerStyled $carousel>
                <LocationContent/>
            </PageContainerStyled>
        </PageSection>
    );
}


export default Location;